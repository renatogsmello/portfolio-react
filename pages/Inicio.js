import React from "react"
import { Button, ButtonOutline } from "./components/Buttons"
export default function Inicio() {
	return (
		<>
			<section id="inicio">
				<div className="container">
					<div className="intro">
						<h1>Olá, Bem vindo ao meu Portfolio!</h1>
						<p>Sou um Web Developer especializado em front-end.</p>
						<Button>Projetos</Button>
						<ButtonOutline>Mande uma mensagem</ButtonOutline>
					</div>
					<div className=""></div>
				</div>
			</section>
			<style jsx>{`
				section {
					height: 100vh;

					background-image: radial-gradient(#03483d 30%, #013129 70%);
				}
				.container {
					max-width: 1250px;
					margin-left: auto;
					margin-right: auto;
					padding: 0 1.5rem;
					display: flex;
					align-items: center;
					height: 100%;
				}
				h1 {
					font-weight: 500;
					color: white;
					font-size: 36px;
				}
				p {
					color: white;
					margin: 1rem 0 4rem 0;
					font-size: 24px;
					font-weight: 300;
				}
			`}</style>
		</>
	)
}
