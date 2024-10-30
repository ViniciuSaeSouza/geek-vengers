import { CardCategoriaProps } from "@/types";
import Image from "next/image";

export function CardCategoria({categoriaImg, nomeCategoria}:CardCategoriaProps){
    return(
        <div>
            <Image src={categoriaImg} alt="Imagem da categoria" width={200} height={200}/>
            <p className="text-center mt-2">{nomeCategoria}</p>
        </div>
    )
}