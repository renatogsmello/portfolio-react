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
			<header>
				<Menu />
			</header>
			<main>
				<Inicio />
				<Habilidades />
				<ExpProfissional />
				<Portfolio />
				<Contato />
			</main>
			<style jsx>{`
				header {
					background-color: #013129;
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					z-index: 2;
				}
			`}</style>
		</>
	)
}
