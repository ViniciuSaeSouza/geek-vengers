import Cabebecalho from "@/components/Cabecalho";
import Image from "next/image";
import banner from "@/image/banner-home.png"

export default function Home() {
  return (
    <div>
      <Cabebecalho/>
      <div className="bg-black flex justify-center">
        <Image className= "max-w-[100%]" src={banner} alt="Imagem escrito marvel com fundo preto e os heróis da marvel compondo o fundo das letras"/>
      </div>
    </div>
  );
}
