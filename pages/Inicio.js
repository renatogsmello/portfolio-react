import React from "react"
import { ButtonOutline } from "./components/Buttons"
export default function Inicio() {
	return (
		<>
			<section id="inicio">
				<div className="container">
					<div className="intro">
						<p>Olá, eu sou</p>
						<h1>
							<span>R</span>enato <span>M</span>ello.
						</h1>
						<h2>Desenvolvedor Front-End</h2>
						<p>
							Crio interfaces para web a fim de promover uma grande experiência para seus usuários e atualmente estou ajudando a construir
							sistemas na
							<a href="https://globalhitss.com" target="_blank" referrerPolicy="no-referrer" rel="noreferrer">
								Global Hitss
							</a>
							.
						</p>
						<ButtonOutline>Dê uma olhada no meu trabalho</ButtonOutline>
					</div>
					<picture>
						<source srcSet="/imagens/inicio_fundo.png" type="image/svg+xml" />
						<img src="/imagens/inicio_fundo.png" alt="ilustração de código" />
					</picture>
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
				.intro {
					max-width: 650px;
					position: relative;
					z-index: 1;
				}

				h1 {
					font-weight: bold;
					color: white;
					font-size: 48px;
				}
				h1 span {
					color: #00e1bb;
					font-size: 48px;
					font-weight: bold;
				}
				h2 {
					color: #a0c8c1;
					font-size: 48px;
					font-weight: bold;
				}
				p:first-of-type {
					font-size: 16px;
					color: #fff;
					margin-bottom: 1.5rem;
				}
				p:last-of-type {
					color: white;
					margin: 1rem 0 4rem 0;
					font-size: 1.2em;
					font-weight: regular;
					color: #a0c8c1;
				}
				a {
					color: #48eed2;
					text-decoration: none;
					margin-left: 0.5rem;
				}
				picture {
					position: absolute;
					left: 50%;
				}
				img {
					opacity: 0.7;
				}
			`}</style>
		</>
	)
}
