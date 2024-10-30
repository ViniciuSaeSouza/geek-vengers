import { StaticImageData } from "next/image";

export type TiposMenu = {
	estilo : string
}

export type ProdutoProps = {
    id: number;
    nome: string;
	imagem: string | StaticImageData;
	modelo: number;
	categoria: string;
    preco: number;
    estoque: number;
}

export type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}


export type CardProdutoProps = {
    bgColor: string;
    categoria: string;
    titulo: string;
    descricao: string;
    img: StaticImageData;
    preco: number;
}

export type BannerProps = {
    fundo: StaticImageData;
    personagem: StaticImageData;
    titulo: StaticImageData;
    texto?: string;
    textoBtn?: string;
}

export type CardCategoriaProps = {
    categoriaImg: StaticImageData;
    nomeCategoria: string;
}