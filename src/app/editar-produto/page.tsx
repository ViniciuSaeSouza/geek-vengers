"use client"

import { Banner } from "@/components/Banner";

import fundo from "../../public/image/fundoL.png";
import personagem from "../../public/image/loki.png";
import titulo from "../../public/image/tituloBannerL.png";

export default function EditarProduto(){



	return(

        <main className="grow">
            <div>
                <h1>Editar Produto</h1>

                <form>
                    <label>Nome:</label>
                    <input type="text" name="nome" placeholder="Nome do produto"/>
                </form>
            
                <Banner fundo={fundo} personagem={personagem} titulo={titulo}/>


            </div>
        </main>
	);
}