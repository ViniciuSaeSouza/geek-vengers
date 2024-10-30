import Image from "next/image";
import { Logo } from "./Logo";
import Menu from "./Menu";
import iconFigma from "../../public/image/icon-fig3.png"
import iconInsta from "../../public/image/icon-insta.png"
import iconGit from "../../public/image/icon-git.png"

export default function Rodape() {

    const estilos = "text-white font-bold "

    return (
        <footer className="bg-black min-w-full bottom-0">
            <div className="flex justify-around items-center py-4">
                <Logo/>
                <Menu estilo={estilos}/>
                <div className="text-white font-semibold">
                    <p>Laura - RM: 558843</p>
                    <p>Maria - RM: 558832</p>
                    <p>Vinicius - RM: 554456</p>
                    <p>João Michaeli - RM: 555678</p>
                </div>
                <div className="text-white font-semibold">
                    <p className="text-center py-2">Siga-nos</p>
                    <div className="flex space-x-2">
                        <Image src={iconFigma} alt="icone do figma"/>
                        <Image src={iconInsta} alt="icone do insta"/>
                        <Image src={iconGit} alt="icone do git"/>
                    </div>
                </div>
            </div>
        </footer>
    );
}