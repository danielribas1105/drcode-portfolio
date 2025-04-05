export default function Experiencia() {
	return (
		<div className="flex flex-col sm:flex-row lg:flex-col items-center justify-around gap-6 p-6 bg-black border-1 border-zinc-800 rounded-2xl">
			<Item principal="+6" label="anos de experiência" />
			<Item principal="+30" label="projetos desenvolvidos" />
		</div>
	)
}

function Item(props: { principal: string; label: string }) {
	return (
		<div className="flex flex-col items-center gap-2">
			<span className="text-violet-800 text-5xl font-bold leading-6">{props.principal}</span>
			<span className="text-zinc-400 text-sm">{props.label}</span>
		</div>
	)
}
