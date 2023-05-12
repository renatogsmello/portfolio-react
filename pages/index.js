import React from "react"
import Menu from "./components/Menu"
import Contato from "./Contato"
import ExpProfissional from "./ExpProfissional"
import Habilidades from "./Habilidades"
import Inicio from "./Inicio"
import Portfolio from "./Portfolio"

export default function App() {
	return (
		<>
			<header className="bg-green-800/90 fixed top-0 inset-x-0 z-10">
				<Menu />
			</header>
			<main>
				<Inicio />
				<Habilidades />
				<ExpProfissional />
				<Portfolio />
				<Contato />
			</main>
		</>
	)
}
