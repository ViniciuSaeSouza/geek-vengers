"use client";
import { ProdutoProps } from "@/types";
import { useState, useEffect } from "react";
import loki from '@/../public/image/loki.png';
import fundo from '@/../public/image/fundoL.png';
import titulo from '@/../public/image/tituloBannerL.png';
import { Banner } from "@/components/Banner";
import { useRouter } from "next/navigation";
import Image from "next/image"

export default function EditarProduto({ params }: { params: { id: number } }) {
	const navigate = useRouter();
	const { id } = params;

	const [produto, setProduto] = useState<ProdutoProps>({
		id: 0,
		nome: '',
		imagem: '',
		modelo: 0,
		categoria: '',
		preco: 0.0,
		estoque: 0,
	});

	// Carregar dados do produto ao iniciar
	useEffect(() => {
		const chamadaApi = async () => {
			const response = await fetch(`http://localhost:3000/api/base-produtos/${id}`);
			const data = await response.json();
			setProduto(data);
			console.log(data);
		};
		chamadaApi();
	}, [id]);

	//Função para armazenar os dados digitados pelo usuário no obj produto
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setProduto({ ...produto, [name]: value });
		
	};

	//Função para enviar os dados atualizados para a API
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const cabecalho = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(produto),
		};

		try {
			const response = await fetch(`http://localhost:3000/api/base-produtos/${produto.id}`, cabecalho);
			if (response.ok) {
				alert(`${produto.nome} atualizado com sucesso!`);
				navigate.push('/produtos');
			} else {
				alert("Erro ao atualizar produto!");
			}
		} catch (error) {
			console.error("Erro ao atualizar o produto", error);
		}
	};

	// Estilos dos elementos
	let spanStyle = "text-green-800 text-3xl mr-2";
	let inputStyle = "relative mt-2 h-14 w-[100%] outline-black/60 text-xl font-thin border-2 rounded-sm pl-4";
	let labelStyle = "text-2xl";

	return (
		<div className="">
			<div className="flex flex-col">
				<h2 className="block text-center font-luckiest text-green-800 font-bold text-3xl my-6">EDITAR PRODUTO</h2>
				
				{/* Bloco de informações do produto */}
				<div className="flex flex-col items-center mb-8">
					{produto.imagem && (
						<Image src={produto.imagem} alt={produto.nome} width={150} height={150} className="rounded-md" />
					)}
					<h3 className="text-2xl font-semibold mt-4">{produto.nome}</h3>
					<p className="text-xl text-gray-500">Modelo: {produto.modelo}</p>
				</div>

				<form onSubmit={handleSubmit} className="flex flex-col gap-10 font-raleway relative max-w-[70%] mx-auto">
				
					<div>
						<label htmlFor="idNome" className={labelStyle}><span className={`${spanStyle}`}>|</span>Nome</label> <br />
						<input className={inputStyle} type="text" name="nome" id="idNome" value={produto.nome} placeholder='Digite o nome do produto' onChange={handleChange} required />
					</div>
					
					<div>
						<label htmlFor="idCategoria" className={labelStyle}><span className={spanStyle}>|</span>Categoria</label> <br />
						<input type="text" name="categoria" id="idCategoria" value={produto.categoria} placeholder='Digite a categoria do produto' onChange={handleChange} className={inputStyle} required />
					</div>
				
					<div>
						<label htmlFor="idEstoque" className={labelStyle}><span className={spanStyle}>|</span>Estoque</label> <br />
						<input type="number" name="estoque" id="idEstoque" value={produto.estoque} placeholder='Digite a quantidade do produto em estoque' onChange={handleChange} className={inputStyle} required />
					</div>
				
					<div>
						<label htmlFor="idPreco" className={labelStyle}><span className={spanStyle}>|</span>Preço</label> <br />
						<input type="number" name="preco" id="idPreco" value={produto.preco} placeholder='Digite o valor do produto' onChange={handleChange} className={inputStyle} required />
					</div>
					
					<div>
						<label htmlFor="idModelo" className={labelStyle}><span className={spanStyle}>|</span>Modelo</label><br />
						<input type="text" name="modelo" id="idModelo" value={produto.modelo} placeholder='Digite o modelo do produto' onChange={handleChange} className={inputStyle} required />
					</div>

					<div>
						<label htmlFor="idImagem">Link da Imagem: </label>
						<input type="text" id="idImagem" name="imagem" onChange={handleChange} className={inputStyle}/>
					</div>

					<div className="text-center">
						<button type='submit' className="bg-green-800 text-white px-10 text-3xl rounded-md py-4 mt-8">Atualizar Produto</button>
					</div>
				</form>
				<div className="mt-[1.4rem]">
					<Banner fundo={fundo} personagem={loki} titulo={titulo} />
				</div>
			</div>
		</div>
	);
}
