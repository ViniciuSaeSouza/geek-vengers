"use client"
import { CardProduto } from "@/components/CardProduto";
import Carrossel from "@/components/Carrossel";
import { CardCategoriaProps, CardProdutoProps } from "@/types";
import { Banner } from "@/components/Banner";

 
// IMAGENS
import img1 from "../../public/image/funko.png";
import img2 from "../../public/image/caneca.png";
import img3 from "../../public/image/hq.png";
import categ1 from "../../public/image/imgCamisa.png";
import categ2 from "../../public/image/imgChaveiro.png";
import categ3 from "../../public/image/imgBoneco.png";
import categ4 from "../../public/image/imgCaneca.png";
import { CardCategoria } from "@/components/CardCategoria";

export default function Home() {

  const produtos:CardProdutoProps[] = [
    {categoria: "POP FUNKO", titulo: "POPFUNKO IRON MAN", descricao: "miniatura colecionável estilizada do icônico herói da Marvel, com o visual característico.", img: img1, preco: 180.00, bgColor: "bg-redCard"},
    {categoria: "CANECA", titulo: "CANECA CAPITÃO AMÉRICA", descricao: "A Caneca Capitão América exibe o herói em ação junto ao seu icônico escudo, ideal para os fãs dos filmes.", img: img2, preco: 49.99, bgColor: "bg-blueCard"},
    {categoria: "HQ", titulo: "QUEM É O PANTERA NEGRA?", descricao: "A HQ 'Quem é o Pantera Negra?' narra a origem de T'Challa como o herói e rei de Wakanda, protegendo sua nação.", img: img3, preco: 50.61, bgColor: "bg-blackCard"},
    {categoria: "POP FUNKO", titulo: "POPFUNKO IRON MAN", descricao: "miniatura colecionável estilizada do icônico herói da Marvel, com o visual característico.", img: img1, preco: 180.00, bgColor: "bg-redCard"},
    {categoria: "CANECA", titulo: "CANECA CAPITÃO AMÉRICA", descricao: "A Caneca Capitão América exibe o herói em ação junto ao seu icônico escudo, ideal para os fãs dos filmes.", img: img2, preco: 49.99, bgColor: "bg-blueCard"},
    {categoria: "HQ", titulo: "QUEM É O PANTERA NEGRA?", descricao: "A HQ 'Quem é o Pantera Negra?' narra a origem de T'Challa como o herói e rei de Wakanda, protegendo sua nação.", img: img3, preco: 50.61, bgColor: "bg-blackCard"},

  ]

  const categorias:CardCategoriaProps[] = [
    {categoriaImg: categ1, nomeCategoria: "Camisetas"},
    {categoriaImg: categ2, nomeCategoria: "Chaveiros"},
    {categoriaImg: categ3, nomeCategoria: "Bonecos"},
    {categoriaImg: categ4, nomeCategoria: "Canecas"}
  ]
 
  return (

    <main className="grow">
      <div>
        <Carrossel/>
        <h2 className="font-luckiest text-redMain text-center text-5xl mb-8 mt-8 font-bold">Alguns Produtos </h2>
        <div className="flex flex-row flex-wrap justify-evenly gap-4 content-around">
          {produtos.map((p, i) => (<CardProduto key={i} bgColor={p.bgColor} categoria={p.categoria} titulo={p.titulo} descricao={p.descricao} img={p.img} preco={p.preco}/> ))}
        </div>
        <button className="flex items-center mx-auto h-[15px] border border-black rounded-xl shadow-sm shadow-black/50 text-redMain font-roboto font-thin text-[18px] p-4 mb-6"> MAIS PRODUTOS </button>
        <Banner/>

        <h2 className="font-luckiest text-redMain text-center text-5xl mb-10 mt-10 font-bold">Algumas categorias</h2>
        <div className="flex flex-row flex-wrap justify-evenly gap-4 content-around mb-8">
            {categorias.map((c, i) => (<CardCategoria key={i} categoriaImg={c.categoriaImg} nomeCategoria={c.nomeCategoria}/>))}
        </div>
      </div>
    </main>
  );
}