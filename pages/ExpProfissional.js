import React from "react"
import Image from "next/image"
import hitssLogo from "../public/imagens/logo_global_hitss.png"
import cbfLogo from "../public/imagens/logo_cbf.png"
import cceadLogo from "../public/imagens/logo_ccead.png"
export default function ExpProfissional() {
	return (
		<>
			<section id="Experiencia" className="bg-gradient-multiple-principal">
				<div className="container">
					<div>
						<h1 className="section-title">Experiência</h1>
						<div className="exp-container">
							<p>7+</p>
							<p>Anos de Experiencia</p>
						</div>
					</div>
					<div className="empresas-container">
						<div className="empresa">
							<a href="https://www.globalhitss.com" target="_blank">
								<picture>
									<source srcSet={hitssLogo} type="image/svg+xml" />
									<Image src={hitssLogo} placeholder="blur" alt="Global Hitss Logo" />
								</picture>
								Global Hitss
							</a>
						</div>
						<div className="empresa">
							<a href="https://ccead.puc-rio.br/home/" target="_blank">
								<picture>
									<source srcSet={cceadLogo} type="image/svg+xml" />
									<Image src={cceadLogo} placeholder="blur" alt="CCEAD Logo" />
								</picture>
								CCEAD - PUC-Rio
							</a>
						</div>
						<div className="empresa">
							<a href="https://www.cbf.com.br" target="_blank">
								<picture>
									<source srcSet={cbfLogo} type="image/svg+xml" />
									<Image src={cbfLogo} placeholder="blur" alt="CBF Logo" />
								</picture>
								Confederação Brasileira de Futebol
							</a>
						</div>
					</div>
				</div>
			</section>
			<style jsx>
				{`
					section {
						height: 500px;
						background-image: linear-gradient(#013129, #03483d, #03483d, #013129);
					}
					h1.section-title {
						color: #03352c;
					}
					.container {
						max-width: 1250px;
						margin-left: auto;
						margin-right: auto;
						padding: 0 1.5rem;
						height: 100%;
					}
					.exp-container {
						font-size: 1.8em;
						position: relative;
						top: -45px;
						left: 45px;
						color: #fff;
						font-weight: bold;
					}
					.empresas-container {
						display: flex;
						justify-content: space-between;
						width: 100%;
					}
					picture {
						margin-bottom: 1rem;
					}
					a {
						display: flex;
						flex-direction: column;
						align-items: center;
						color: #00e1bb;
						text-decoration: none;
						padding: 1rem;
					}
					a:hover {
						background-color: rgba(0, 0, 0, 0.25);
						border-radius: 0.25rem;
						padding: 1rem;
					}
					@media screen and (max-width: 768px) {
						section {
							height: 100%;
						}
						h1.section-title {
							font-size: 3.5em;
							color: #0a8b75;
						}
						.exp-container {
							margin-top: 1rem;
						}
						.empresas-container {
							flex-direction: column;
						}
					}
				`}
			</style>
		</>
	)
}
