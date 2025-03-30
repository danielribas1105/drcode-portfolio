import Curriculo from "@/components/curriculo"
import Principal from "@/components/landing/principal"
import { obterTecnologias } from "@/functions/tecnologias"

export default async function Home() {
	const tecnologias = await obterTecnologias()
	console.log(tecnologias)
	return (
		<div>
			<Principal />
			<Curriculo tecnologias={tecnologias.todas} />
		</div>
	)
}
