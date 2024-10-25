import React from 'react'
import Link from 'next/link'
import { TiposMenu } from '@/types';



export default function Menu({estilo}:TiposMenu) {
  return (
	<ul className={`${estilo} font-bebas`}>
		<li><Link href={'/'}>HOME</Link></li>
		<li><Link href={'/pages/produtos'}>PRODUTOS</Link></li>
		<li><Link href={'/pages/cadastrar-produto'}>CADASTRO DE PRODUTO</Link></li>
	</ul>
  );
}