import { Tecnologia } from "@core"

export interface TecnologiasTrabalhadasProps {
	tecnologias: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
	console.log("Tipo de tecnologias:", typeof props.tecnologias, props.tecnologias)
	// Garantir que é um array antes de usar .map()
	const tecnologiasArray = Array.isArray(props.tecnologias) ? props.tecnologias : []

	return tecnologiasArray ? (
		<div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border-1 border-zinc-800 rounded-2xl">
			<div className="flex justify-center gap-x-3 items-center flex-wrap">
				{tecnologiasArray.map((tecnologia) => (
					<div key={tecnologia.id}>
						<span className="text-violet-800 font-bold">#</span>
						<span>{tecnologia.nome}</span>
					</div>
				))}
			</div>
		</div>
	) : null
}
