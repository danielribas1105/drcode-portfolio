import Image from "next/image"
import FotoPerfil from "@/../public/foto-daniel-ribas.jpg"

export default function MiniCv() {
	return (
		<div className="flex flex-1 flex-col-reverse sm:flex-row lg:flex-col-reverse xl:flex-row items-center gap-4 p-6 bg-black border-1 border-zinc-800 rounded-2xl">
			<div className="relative min-w-64 h-60 rounded-3xl overflow-hidden">
				<Image src={FotoPerfil} alt="Foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6">
				<div className="flex flex-col items-start">
					<span className="bg-gradient-to-r from-violet-800 via-white to-violet-400 text-transparent bg-clip-text text-2xl font-bold">
						Daniel Ribas
					</span>
					<span>Front-end Developer</span>
				</div>
				<p className="text-sm text-justify">
					Apaixonado por design e programação. Em constante desenvolvimento de minhas habilidades e
					crescimento profissional. Curto trabalhos criativos onde posso desafiar meus
					conhecimentos. Acredito que a chave para um bom trabalho em equipe é a comunicação. Estou
					sempre buscando aprender novas tech skills, para agregar ao meu portfólio.
				</p>
			</div>
		</div>
	)
}
