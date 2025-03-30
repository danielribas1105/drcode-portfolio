import Cabecalho from "@/components/shared/cabecalho"

export default async function InfoProjeto(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params
	return (
		<div className="bg-black">
			<Cabecalho />
			Projeto {id}
		</div>
	)
}
