import { Tecnologia } from "@core"

export interface TecnologiasTrabalhadasProps {
	tecnologias: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
	console.log("Tipo de tecnologias:", typeof props.tecnologias, props.tecnologias)
	// Garantir que é um array antes de usar .map()
	const tecnologiasArray = Array.isArray(props.tecnologias) ? props.tecnologias : []

	return tecnologiasArray ? (
		<div className="flex justify-center items-center p-6">
			{tecnologiasArray.map((tecnologia) => (
				<div key={tecnologia.id}>{tecnologia.nome}</div>
			))}
		</div>
	) : null
}
