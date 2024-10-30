import { CardProdutoProps } from "@/types";
import Image from "next/image";
// import funko from "../../public/image/funko.png";
 
export function CardProduto({bgColor, categoria, titulo, descricao, img, preco}:CardProdutoProps){
    return(
        <div className="relative w-[322px] h-[315px] shadow shadow-black-500/50 mb-8">
        <div className={`w-full h-[55px] ${bgColor} absolute inset-0 mt-20 flex items-center justify-end mx-auto`}> <p className="text-white text-2xl font-anton me-1 font-semibold">{categoria}</p></div>
        <div className="flex">
            <Image src={img} alt="Produto" height={180} width={150}className="absolute ml-1 mt-[62px]"/>
            <div className=" mt-36 w-full">
                <div className="w-[160px] flex flex-col justify-end ms-auto gap-1 mr-1">
                    <p className="text-[15px] font-roboto font-bold ml-[0.5px]">{titulo}</p>
                    <p className="text-[12px] font-roboto ml-[0.5px]">{descricao}</p>
                    <p className="text-redMain font-anton font-extrabold ms-auto ">R$ <span>{preco}</span></p>
                   
                </div>
            </div>
        </div>
     
    </div>
    )
}