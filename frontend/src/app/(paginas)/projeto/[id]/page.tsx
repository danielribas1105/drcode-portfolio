import Readme from "@/components/projetos/readme"
import Cabecalho from "@/components/shared/cabecalho"
import CarrosselImagens from "@/components/shared/carrossel-imagens"
import Container from "@/components/shared/container"
import Tecnologias from "@/components/tecnologias/tecnologias"
import { obterReadme } from "@/functions/github"
import { obterProjeto } from "@/functions/projetos"

export default async function InfoProjeto(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params
	const projeto = await obterProjeto(id)

	if (!projeto) return null

	const readme = await obterReadme(projeto?.repositorio)

	return (
		<div className="bg-black">
			<Cabecalho />
			<Container className="flex flex-col items-center py-7 gap-10">
				<h1 className="text-3xl font-bold self-start">{projeto?.nome}</h1>
				<CarrosselImagens imagens={projeto.imagens.slice(1)} />
				<Tecnologias listaTecnologias={projeto.tecnologias} />
				<Readme markdown={readme} />
			</Container>
		</div>
	)
}
