import Image from "next/image";

import fundo from "../../public/image/fundoW.png";
import personagem from "../../public/image/wanda.png";
import titulo from "../../public/image/tituloBannerW.png";

export function Banner(){
    return(
        <div className="relative mt-28 mb-32">
            <Image src={fundo} alt="Imagem" className="w-full" />
            <div className="absolute top-0 left-auto right-0 bottom-0 flex items-center justify-center">
                <Image src={personagem} alt="Imagem"  className=""/>
            </div>
            <div className="absolute top-0 left-0 right-1/2 bottom-0 items-center justify-center flex flex-col">
                <Image src={titulo} alt="Imagem"  className=""/>
                <p className="w-[160px] text-white text-center">20% OFF para produtos relacionados à Wanda.</p>
                <button className="bg-redWanda text-white mt-3 h-[40px] w-[190px] rounded-2xl shadow-sm shadow-black/50 font-roboto font-thin">VEJA MAIS</button>
            </div>
        </div>
    )
}