import React from "react"
import Menu from "./components/Menu"
import Habilidades from "./Habilidades"
import Inicio from "./Inicio"

export default function App() {
	return (
		<>
			<header style={{ position: "fixed", top: "0", left: "0", right: "0", backgroundColor: "green" }}>
				<Menu />
			</header>
			<main style={{ marginTop: "70px", maxWidth: "1250px", marginLeft: "auto", marginRight: "auto" }}>
				<Inicio />
				<Habilidades />
			</main>
		</>
	)
}
