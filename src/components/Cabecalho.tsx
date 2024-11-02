import Menu from "./Menu";
import { Logo } from "./Logo";
import Link from "next/link";

export default function Cabebecalho(){
	
	const estilos = "text-white font-bold flex items-center space-x-8 text-xl font-bebas links"
	
	return (
		<header className="bg-black py-6">
			<div className="flex justify-between align-middle ps-12 xl:pe-36 md:pe-10">
				<Link href={'/'}><Logo/></Link>
				<Menu estilo={estilos}/>
			</div>
		</header>
	);
}