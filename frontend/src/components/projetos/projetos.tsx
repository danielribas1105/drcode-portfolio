import { Projeto } from "@core"
import ItemProjeto from "./item-projeto"

export interface ProjetoProps {
    titulo: string
    listaProjetos: Projeto[]
}

export default function Projetos(props: ProjetoProps) {
    return (
        <div>
            <h3 className="text-2xl font-black text-white/70">{props.titulo}</h3>
            <div className="flex gap-4 flex-wrap">
                {props.listaProjetos.map((projeto) => (
                    <ItemProjeto key={projeto.id} projeto={projeto}/>
                ))}
            </div>
        </div>
    )
}