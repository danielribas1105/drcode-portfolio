import Link from "next/link"
import Image from "next/image"
import { Projeto } from "@core"

export interface ItemProjetoProps {
    projeto: Projeto
}

export default function ItemProjeto(props: ItemProjetoProps) {
    return (
        <Link href={`/projeto/${props.projeto.id}`}>
            <div className="relative overflow-hidden min-w-64 min-h-64 rounded-2xl border border-zinc-800">
                <Image src={props.projeto.imagens[0]} alt={props.projeto.nome} fill objectFit="object-cover"/>
            </div>
        </Link>
    )
}