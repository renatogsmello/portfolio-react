import React from "react"
import { Container } from "react-bootstrap"
export default function Inicio() {
	return (
		<>
			<div id="inicio" className="bg-gradient-principal vh-100">
				<Container>
					<h1 class="fs-1 fw-bold text-white">Olá, Bem vindo ao meu Portfolio!</h1>
					<p class="fs-5 text-white">Sou um Web Developer especializado em front-end.</p>
					<button class="btn btn-primary btn-lg me-3" type="button">
						De uma olhada no meu trabalho
					</button>
					<button class="btn btn-outline-success btn-lg" type="button">
						Me mande uma mensagem
					</button>
				</Container>
			</div>
		</>
	)
}
