import Image from "next/image";
import banner from "@/image/banner-home.png"

export default function Home() {
  // const  tailWind = "text-white font-bold flex items-center space-x-8 text-xl font-bebas links"

  return (
    <div className="bg-black flex justify-center">
      <Image className= "max-w-[100%]" src={banner} alt="Imagem escrito marvel com fundo preto e os heróis da marvel compondo o fundo das letras"/>
    </div>
  );
}
