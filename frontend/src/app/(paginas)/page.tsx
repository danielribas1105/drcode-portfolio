import Curriculo from "@/components/curriculo"
import Principal from "@/components/landing/principal"
import Container from "@/components/shared/container"
import { obterTecnologias } from "@/functions/tecnologias"

export default async function Home() {
	const tecnologias = await obterTecnologias()
	console.log(tecnologias)
	return (
		<div>
			<Principal tecnologias={tecnologias.destaques} />
			<Container className="py-16">
				<Curriculo tecnologias={tecnologias.todas} />
			</Container>
		</div>
	)
}
