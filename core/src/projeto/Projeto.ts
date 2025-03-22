import { Nivel } from "./Nivel"
import { Tipo } from "./Tipo"
import Tecnologia from "../tecnologia/Tecnologia"

export default interface Projeto {
	id: number
	nome: string
	descricao: string
	imagens: string[]
	nivel: Nivel
	tipo: Tipo
	destaque: boolean
	repositorio: string
	tecnologias: Tecnologia[]
}
