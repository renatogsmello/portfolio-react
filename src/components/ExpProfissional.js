import React from "react"
import logoCbf from "../imagens/logo_cbf.png"

export default function ExpProfissional() {
	return (
		<>
			<section id="experiencia-profissional" className="bg-gradient-multiple-principal">
				<div>
					<h1 className="text-white mt-5">Experiência Profisional</h1>
					<img src={logoCbf} alt="logo CBF"></img>
				</div>
			</section>
		</>
	)
}
