"use client"
import { usePathname } from "next/navigation"
import MenuItem from "./menu-item"

export default function Menu() {
	const pathName = usePathname()
	return (
		<nav className="flex gap-6">
			<MenuItem href="/" selecionado={pathName === "/"}>
				Início
			</MenuItem>
			<MenuItem href="/projeto/1" selecionado={pathName.startsWith("/projeto")}>
				Projetos
			</MenuItem>
			<MenuItem href="/contato" selecionado={false}>
				Contato
			</MenuItem>
		</nav>
	)
}
