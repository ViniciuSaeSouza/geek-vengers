import Image from "next/image";

import Link from "next/link";
import { BannerProps } from "@/types";

export function Banner({ fundo, personagem, titulo, texto, textoBtn }: BannerProps) {
    return (
        <div className="relative mt-28 mb-32">
            <Image src={fundo} alt="Imagem" className="w-full" />
            <div className="absolute top-0 left-auto right-0 bottom-0 flex items-center justify-center">
                <Image src={personagem} alt="Imagem" className="" />
            </div>
            <div className="absolute top-0 left-0 right-1/2 bottom-0 items-center justify-center flex flex-col">
                <Image src={titulo} alt="Imagem" className="" />

                {/* Condicional para exibir <p> e <button> somente se 'texto' e 'textoBtn' estiverem definidos */}
                {texto && textoBtn && (
                    <>
                        <p className="w-[160px] text-white text-center">
                           {texto}
                        </p>
                        <button className="bg-redWanda text-white mt-3 h-[40px] w-[190px] rounded-2xl shadow-sm shadow-black/50 font-roboto font-thin">
                            <Link href="/produtos">{textoBtn}</Link>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
