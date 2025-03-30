import Image from "next/image"
import Container from "./container"
import logo from "../../../public/logo-drcode-dark-470-270.png"
import Link from "next/link"
import Menu from "../menu/menu"

export default function Cabecalho() {
	return (
		<header className="flex items-center py-1 bg-black/50 w-full">
			<Container className="flex flex-1 justify-between items-center">
				<div className="flex items-center gap-10">
					<Link href="/">
						<Image src={logo} alt={"Logo DRCode - Developer"} width={120} height={0} />
					</Link>
					<Menu />
				</div>
				<Link
					href="https://www.linkedin.com/in/danielribas-developer/"
					className="bg-violet-900 rounded-full px-7 py-1 text-sm font-bold"
					target="_blank"
				>
					LinkEdin
				</Link>
			</Container>
		</header>
	)
}
