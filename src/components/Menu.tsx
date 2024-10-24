import React from 'react'
import Link from 'next/link'

export default function Menu() {
  return (
	<ul className="text-white font-bold flex items-center space-x-8 text-xl font-bebas links">
		<li><Link href={'/'}>HOME</Link></li>
		<li><Link href={'/pages/produtos'}>PRODUTOS</Link></li>
		<li><Link href={'/pages/cadastrar-produto'}>CADASTRO DE PRODUTO</Link></li>
	</ul>
  );
}
