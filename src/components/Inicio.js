import React from "react"

export default function Inicio() {
	return (
		<>
			<div id="inicio" className="bg-gradient-principal vh-100">
				<div>
					<h1 className="fs-1 fw-bold text-white">Olá, Bem vindo ao meu Portfolio!</h1>
					<p className="fs-5 text-white">Sou um Web Developer especializado em front-end.</p>
					<button className="btn btn-primary btn-lg me-3" type="button">
						De uma olhada no meu trabalho
					</button>
					<button className="btn btn-outline-success btn-lg" type="button">
						Me mande uma mensagem
					</button>
				</div>
			</div>
		</>
	)
}
