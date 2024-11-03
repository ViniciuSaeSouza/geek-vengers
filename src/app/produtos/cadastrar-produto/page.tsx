"use client"
import { ProdutoProps } from "@/types";
import { useState } from "react";
import miranha from '@/../public/image/homemAranha.png'
import fundo from '@/../public/image/fundoAranha.png'
import titulo from '@/../public/image/tituloBannerAranha.png'
import Image from "next/image";
import { Banner } from "@/components/Banner";
import {useRouter } from "next/navigation";
import FormularioCadastro from "@/components/FormularioCadastro";

export default function CadastrarProduto(){
	const navigate = useRouter()

	const [produto, setProduto] = useState<ProdutoProps>({
		id: 0,
		nome: '',
		imagem: '',
		modelo: 0,
		categoria: '',
		preco: 0.0,
		estoque: 0,
	})

	const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		const {name, value, files} = e.target;		
		setProduto({...produto,[name]:value})
	
	}
	
	const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(produto.imagem)
		const cabecalho = {
			method : "POST",
			headers : { "Content-type": "application/json"},
			body: JSON.stringify(produto)
		}
		try {
			const response = await fetch("http://localhost:3000/api/base-produtos", cabecalho)
			
			if(response.ok){
				alert(`${produto.nome} cadastrado com Sucesso!`)
				setProduto({id:0, nome: '', imagem: '', modelo: 0, categoria: '', estoque: 0, preco: 0})
				navigate.push('/produtos')
			}else {
				alert("Erro ao cadastrar!")
			}
		} catch (error){
			console.log("Erro ao cadastrar o produto: ", error)
		}
		
	}

	let spanStyle = "text-redSpan text-3xl mr-2"
	let inputStyle = "relative  mt-2 h-14 w-[100%] outline-black/60 text-xl font-thin border-2 rounded-sm pl-4"
	let labelStyle = "text-2xl"
	
	return (
		<div className="" >
			<div className="flex flex-col">
				<h2 className="block text-center font-luckiest text-redSpan font-bold text-3xl my-6">CADASTRO PRODUTO</h2>
				<form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-10 font-raleway relative max-w-[70%] mx-auto">
			
					<div>
						<label htmlFor="idNome" className={labelStyle}><span className={`${spanStyle}`}>|</span>Nome</label> <br />
						<input className={inputStyle} type="text" name="nome" id="idNome" value={produto.nome} placeholder='Digite o nome do produto' onChange={handleChange} required/>
					</div>
					
					
					<div>
						<label htmlFor="idCategoria" className={labelStyle}><span className={spanStyle}>|</span>Categoria</label> <br />
						<input type="text" name="categoria" id="idCategoria" value={produto.categoria} placeholder='Digite a categoria do produto' onChange={handleChange} className={inputStyle} required/>
					</div>
				
				
					<div>
						<label htmlFor="idEstoque" className={labelStyle}><span className={spanStyle}>|</span>Estoque</label> <br />
						<input type="number" name="estoque" id="idEstoque" value={produto.estoque} placeholder='Digite a quantidade do produto em estoque' onChange={handleChange} className={inputStyle} required/>
					</div>
				
					<div>
						<label htmlFor="idPreco" className={labelStyle}><span className={spanStyle}>|</span>Preço</label> <br />
						<input type="number" name="preco" id="idPreco" value={produto.preco} placeholder='Digite o valor do produto' onChange={handleChange} className={inputStyle} required/>
					</div>
					
					<div>
						<label htmlFor="idModelo" className={labelStyle}><span className={spanStyle}>|</span>Modelo</label><br />
						<input type="text" name="modelo" id="idModelo" value={produto.modelo} placeholder='Digite o modelo do produto' onChange={handleChange} className={inputStyle} required/>
					</div>

					<div>
						<label htmlFor="idImagem">Link da Imagem: </label>
						<input type="text" id="idImagem" name="imagem" onChange={handleChange} className={inputStyle}/>
					</div>

					{/* <div>
						<p className={labelStyle}><span className={spanStyle}>|</span>Imagem:</p>
						<div className="text-center font-raleway flex flex-col gap-4 mt-6 border-dashed border-black/30 border-2 px-48 py-4">
							<h3 className="text-xl">Selecione um arquivo aqui</h3>
							<p className="opacity-50">PNG, JPG, JPEG</p>
							<label htmlFor="idImagem" className=" bg-[#9E1618] text-white text-sm max-w-48 mx-auto px-2 py-4 rounded-sm">ESCOLHER ARQUIVO</label>
							<input className='' type="file" id="idImagem" alt="enviar imagem" accept='image/jpg, image/png, image/jpeg' onChange={handleChange} required/>
						</div>
					</div> */}
					<div className="text-center">
						<button type='submit' className="bg-redSpan text-white px-10  text-3xl rounded-md py-4 mt-8">Cadastrar Produto</button>
					</div>
				</form>
				<div className="mt-[1.4rem] ">
					<Banner fundo={fundo} personagem={miranha} titulo={titulo}/>
				</div>
			</div>
	</div>
  )
}