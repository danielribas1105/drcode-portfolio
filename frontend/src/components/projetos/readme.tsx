import ConteudoMd from "../shared/conteudo-md"

interface ReadmeProps {
	markdown: string
}

export default function Readme(props: ReadmeProps) {
	return (
		<div className="flex flex-col items-stretch border border-zinc-800 rounded-2xl p-6 bg-black">
			<div className="prose prose-zinc prose-invert" style={{ maxWidth: "100%" }}>
				<ConteudoMd markdown={props.markdown} />
			</div>
		</div>
	)
}
