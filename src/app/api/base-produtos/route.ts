import { ProdutoProps } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {

    const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8')

    const produtos = JSON.parse(file)

    return NextResponse.json(produtos) // retornando todos os produtos
}

export async function POST(request: Request) {
    // cwd: faz um método para poder buscar o conteúdo do arquivo
    const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8')
    const data = JSON.parse(file) // convertendo a str para um array de objetos

    const { nome, preco, estoque } = await request.json() // pegando as info do novo produto
    const produto = { nome, preco, estoque } as ProdutoProps // guardando essas info no produto

    produto.id = Number(Date.now()) // pegando o exato momento que a função é chamada
    data.push(produto)

    const json = JSON.stringify(data)
    await fs.writeFile(process.cwd() + '/src/data/base.json', json)

    return NextResponse.json(produto)
}