import Link from "next/link"
import React from "react"

export interface MenuItemProps {
	href: string
	children: React.ReactNode
	selecionado: boolean
	novaAba?: boolean
}

export default function MenuItem(props: MenuItemProps) {
	return (
		<Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
			<span
				className={`
         flex items-center gap-2 border-violet-800 hover:text-white hover:border-b-4
         ${props.selecionado ? "border-b-4 text-white" : "text-zinc-500"}
         `}
			>
				{props.children}
			</span>
		</Link>
	)
}
