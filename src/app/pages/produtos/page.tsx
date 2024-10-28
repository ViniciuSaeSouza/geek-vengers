"use client"

import { ProdutoProps } from "@/types"
import Link from "next/link"
// import { useRouter } from "next/navigation"
// import Modal from "./Modal"
import { useEffect, useState } from "react"
import { FaTrash } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md"
import Image from "next/image"

// import Image, { StaticImageData } from "next/image"

// import funko from '../../../image/funko.png';
// import caneca from '../../../image/caneca.png';
// import hq from '../../../image/hq.png';

// const images = {
//     "caneca.png": caneca,
//     "funko.png": funko,
//     "hq.png": hq,
// };

export default function Produtos() {

//   const navigate = useRouter()

//   const [open, setOpen] = useState(false) // abrir e fechar o modal
//   const [idDelete, setIdDelete] = useState(0) // função de deleção

//   const idModal = (id: number) => {
//       setOpen(true) // dar um true pro modal
//       setIdDelete(id)
//   }

  const [lista, setLista] = useState<ProdutoProps[]>([])

  useEffect(() => {
      const chamadaApi = async () => {
          const response = await fetch("http://localhost:3000/api/base-produtos")
          const data = await response.json()
          setLista(data)
          console.log(data);
      }
      chamadaApi()
  }, [])

//   const handleDelete = async (id: number) => {

//       try {
//           const response = await fetch(`http://localhost:3000/api/base-produtos/${id}`, { method: "DELETE" })
//           if (response.ok) {
//               setOpen(false)
//               window.location.reload() // recarregar a página
//           } else {
//               alert("Erro ao deletar o produto!")
//               setOpen(false)
//               navigate.push('/produtos')
//           }
//       }
//       catch (error) {
//           console.error("Falha ao apagar registro.", error);
//       }
//   }

  return (
	  <main>
      <h1>Produtos</h1>

      <table>
          <thead>
              <tr>
                  <th>Id</th>
                  <th>Nome do Produto</th>
                  <th>Categoria</th>
                  <th>Estoque</th>
                  <th>Preço</th>
                  <th>Ações</th>
              </tr>
          </thead>
          <tbody>
              {
                  lista.map(p => (
                      <tr key={p.id}>
                          <td>{p.id}</td>
                          <td>{p.nome}
                             {/* src={images[p.imagem]} */}
                          <Image src={p.imagem} alt={p.nome} width={50} height={50}/>
                            <br /> Modelo - {p.modelo}</td>
                          <td>{p.categoria}</td>
                          <td>{p.estoque}</td>
                          <td>{p.preco}</td>
                          <td>
                              <Link title="Editar" href={`/pages/cadastrar-produto/${p.id}`}>
                                  <MdModeEditOutline /> {/* Editar */}
                              </Link>
                              <button title="Excluir">
                              {/* <button title="Excluir" onClick={() => idModal(p.id)}> */}
                                  <FaTrash /> {/* Excluir */}
                              </button>
                          </td>
                      </tr>
                  ))
              }
          </tbody>
      </table>
            {/* <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-56">
                    <FaTrash size={56} className="mx-auto text-red-500" />
                    <h3 className="text-lg font-black text-gray-800">Excluir Produto?</h3>
                    <p className="text-gray-500 text-sm">Você tem certeza que deseja excluir o produto?</p>
                </div>
                <div className="flex gap-4">
                    <button className="btn btn-danger w-full" onClick={() => handleDelete(idDelete)}>Excluir</button>
                    <button className="btn btn-light w-full" onClick={() => setOpen(false)}>Cancelar</button>
                </div>
            </Modal> */}
    </main>
  )
}