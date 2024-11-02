import { ProdutoProps } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";


export async function GET() {

    const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8')

    const produtos = JSON.parse(file)

    return NextResponse.json(produtos) // retornando todos os produtos
}

export async function POST(request: Request) {
    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");
    const data: ProdutoProps[] = JSON.parse(file);

    // Extrair os dados do produto enviados no JSON
    const { nome, imagem: imagemBase64, modelo, categoria, estoque, preco } = await request.json();

    if (!imagemBase64) {
        return NextResponse.json({ error: "Imagem não fornecida" }, { status: 400 });
    }

    try {
        // Gera um nome único para a imagem
        const imageName = `produto_${data.length + 1}.jpg`;
        const imagePath = path.join(process.cwd(), "public/uploads", imageName);

        // Separa a parte do conteúdo `base64` (remove `data:image/jpeg;base64,` se existir)
        const base64Data = imagemBase64.split(",")[1]; // Isso pega apenas os dados da imagem em si

        // Cria o buffer a partir da string base64
        const imageBuffer = Buffer.from(base64Data, "base64");
        await fs.writeFile(imagePath, imageBuffer);

        // Cria o novo produto com o caminho da imagem
        const produto: ProdutoProps = {
            id: data.length + 1,
            nome,
            imagem: `/uploads/${imageName}`, // Caminho relativo da imagem
            modelo,
            categoria,
            estoque,
            preco,
        };

        data.push(produto);

        // Salva os dados atualizados no arquivo JSON
        const json = JSON.stringify(data);
        await fs.writeFile(process.cwd() + "/src/data/base.json", json);

        return NextResponse.json(produto);
    } catch (error) {
        console.error("Erro ao salvar a imagem:", error);
        return NextResponse.json({ error: "Erro ao salvar o produto" }, { status: 500 });
    }
}