import { Tecnologia } from "@core"
import Image from "next/image"

export interface TecnologiasProps {
	listaTecnologias: Tecnologia[]
}

export default function Tecnologias(props: TecnologiasProps) {
	// Garantir que é um array antes de usar .map()
	const tecnologiasArray = Array.isArray(props.listaTecnologias) ? props.listaTecnologias : []

	return tecnologiasArray ? (
		<div className="flex justify-center gap-4 flex-wrap w-4/5">
			{tecnologiasArray.map((tecnologia) => (
				<div key={tecnologia.id} className="flex flex-col items-center gap-2">
					<span className="relative h-11 w-11 sm:h-16 rounded-xl overflow-hidden">
						<Image
							src={tecnologia.imagem}
							alt={tecnologia.nome}
							fill
							className="object-contain"
						/>
					</span>
					<span className="text-[10px] text-zinc-400">{tecnologia.nome}</span>
				</div>
			))}
		</div>
	) : null
}
