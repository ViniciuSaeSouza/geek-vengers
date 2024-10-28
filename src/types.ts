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