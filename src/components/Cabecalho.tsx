import Menu from "./Menu";
import { Logo } from "./Logo";


export default function Cabebecalho(){
	return (
		<header className="bg-black py-6">
			<div className="flex justify-between align-middle ps-12 pe-48">
				<Logo/>
				<Menu/>
			</div>
		</header>
	);
}