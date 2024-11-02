"use client"

import { ProdutoProps } from "@/types"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaTrash } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md"
import Image from "next/image"
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { Banner } from "@/components/Banner";

import fundo from "../../../public/image/fundoCap.png";
import personagem from "../../../public/image/capitao.png";
import titulo from "../../../public/image/tituloBannerCap.png";

export default function Produtos() {

  const navigate = useRouter()

  const [open, setOpen] = useState(false) // abrir e fechar o modal
  const [idDelete, setIdDelete] = useState(0) // função de deleção

  const idModal = (id: number) => {
      setOpen(true) // dar um true pro modal
      setIdDelete(id)
  }

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

  const handleDelete = async (id: number) => {

      try {
          const response = await fetch(`http://localhost:3000/api/base-produtos/${id}`, { method: "DELETE" })
          if (response.ok) {
              setOpen(false)
              window.location.reload() // recarregar a página
          } else {
              alert("Erro ao deletar o produto!")
              setOpen(false)
              navigate.push('/produtos')
          }
      }
      catch (error) {
          console.error("Falha ao apagar registro.", error);
      }
  }

  return (
	<main className="font-raleway flex flex-col items-center justify-center">
      <h1 className="font-luckiest text-blueMain text-center text-4xl mb-8 mt-8 font-extrabold">Lista Produtos</h1>

      <table className="w-10/12 border-collapse mt-5 shadow-lg rounded-lg overflow-hidden mb-5">
          <thead className="bg-blue-500 text-white">
              <tr>
                  <th>ID</th>
                  <th>Nome do Produto</th>
                  <th>Categoria</th>
                  <th>Estoque</th>
                  <th>Preço</th>
                  <th>Ações</th>
              </tr>
          </thead>
          <tbody className="bg-white">
              {
                  lista.map(p => (
                      <tr className="border-b border-gray-400 hover:bg-gray-100 transition duration-200" key={p.id}>
                          <td className="p-4 text-center">{p.id}</td>
                          <td className="p-4 flex items-center justify-center">
                            <Image src={p.imagem} alt={p.nome} width={70} height={70} className="rounded-md"/>
                            <div className="flex flex-col items-start ml-3">
                              <span className="text-blueName font-bold">{p.nome}</span>
                              <span className="text-gray-600">Modelo - {p.modelo}</span>
                            </div>
                          </td>
                          <td className="p-4 text-center">{p.categoria}</td>
                          <td className="p-4 text-center">{p.estoque}</td>
                          <td className="p-4 text-center">R$ {p.preco}</td>
                          <td className="p-4 text-center">
                            <div className="flex items-center space-x-3">
                                <Link title="Editar" href={`/produtos/${p.id}`} className="text-blue-600 hover:text-blue-800 transition">
                                    <MdModeEditOutline className="h-5 w-5" /> {/* Editar */}
                                </Link>
                                <button title="Excluir" onClick={() => idModal(p.id)} className="text-red-600 hover:text-red-800 transition">
                                    <FaTrash className="h-5 w-5" /> {/* Excluir */}
                                </button>
                            </div>
                          </td>
                      </tr>
                  ))
              }
          </tbody>
      </table>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-56">
                    <FaTrash size={56} className="mx-auto text-red-500" />
                    <h3 className="text-lg font-black text-gray-800">Excluir Produto?</h3>
                    <p className="text-gray-500 text-sm">Você tem certeza que deseja excluir o produto?</p>
                </div>
                <div className="flex gap-4">
                    <button className="btn btn-danger w-full" onClick={() => handleDelete(idDelete)}>Excluir</button>
                    <button className="btn btn-light w-full" onClick={() => setOpen(false)}>Cancelar</button>
                </div>
            </Modal>

        <Banner fundo={fundo} personagem={personagem} titulo={titulo}/>
    </main>
  )
}