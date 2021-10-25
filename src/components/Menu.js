import React from "react"
import logo from "../imagens/logo.png"

export default function Menu(props) {
	return (
		<nav className="container fixed inset-x-0">
			<ul className="flex justify-between py-3">
				<img src={logo} alt="logo" className="w-36" />

				{props.children}

				<button>baixar</button>
			</ul>
		</nav>
	)
}
