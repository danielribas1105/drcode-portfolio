import Curriculo from "@/components/curriculo"
import Principal from "@/components/landing/principal"
import Projetos from "@/components/projetos/projetos"
import Container from "@/components/shared/container"
import { obterProjetos } from "@/functions/projetos"
import { obterTecnologias } from "@/functions/tecnologias"

export default async function Home() {
	const tecnologias = await obterTecnologias()
	const projetos = await obterProjetos()

	console.log(tecnologias)

	return (
		<div>
			<Principal tecnologias={tecnologias.destaques} />
			<Container className="py-16 flex flex-col itens-center gap-10">
				<Projetos titulo={"Destaques"} listaProjetos={projetos.destaques} />
				<Projetos titulo={"Web"} listaProjetos={projetos.web} />
				<Projetos titulo={"Mobile"} listaProjetos={projetos.mobile} />
				<Projetos titulo={"Jogos"} listaProjetos={projetos.jogos} />
				<Curriculo tecnologias={tecnologias.todas} />
			</Container>
		</div>
	)
}
