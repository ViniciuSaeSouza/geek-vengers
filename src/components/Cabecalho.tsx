import Menu from "./Menu";
import { Logo } from "./Logo";


export default function Cabebecalho(){
	
	const estilos = "text-white font-bold flex items-center space-x-8 text-xl font-bebas links"
	
	return (
		<header className="bg-black py-6">
			<div className="flex justify-between align-middle ps-12 pe-48">
				<Logo/>
				<Menu estilo={estilos}/>
			</div>
		</header>
	);
}