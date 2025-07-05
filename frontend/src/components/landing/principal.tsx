import { Tecnologia } from "@core"
import Cabecalho from "../shared/cabecalho"
import Tecnologias from "../tecnologias/tecnologias"

export interface PrincipalProps {
	tecnologias: Tecnologia[]
}

export default function Principal(props: PrincipalProps) {
	return (
		<div className="flex flex-col items-center justify-center h-[500px] bg-[url('/principal.jpg')] bg-cover bg-center">
			<Cabecalho />
			<div className="flex flex-1 flex-col justify-center items-center w-full gap-5">
				<div className="flex flex-col items-center gap-1">
					<h1 className="flex gap-3 items-center">
						<span className="w-3 h-3 rounded-full bg-violet-800"></span>
						<span className="text-3xl sm:text-5xl font-bold text-center">Daniel Ribas</span>
						<span className="w-3 h-3 rounded-full bg-violet-800"></span>
					</h1>
					<h2 className="text-zinc-500 text-center text-lg">Front-end developer</h2>
				</div>
				<Tecnologias listaTecnologias={props.tecnologias} />
			</div>
		</div>
	)
}
