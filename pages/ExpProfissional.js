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
					<h1 className="section-title">Experiência</h1>
					<div>
						<div className="exp-container">
							<p>5+</p>
							<p>Anos de Experiencia</p>
						</div>
						<div>
							<p>50+</p>
							<p>Projetos Concluídos</p>
						</div>
					</div>
					<div className="empresas-container">
						<div>
							<a href="https://www.google.com">
								<picture>
									<source srcSet={hitssLogo} type="image/svg+xml" />
									<Image src={hitssLogo} placeholder="blur" alt="Global Hitss Logo" />
								</picture>
							</a>
						</div>
						<div>
							<a href="https://www.google.com">
								<picture>
									<source srcSet={cceadLogo} type="image/svg+xml" />
									<Image src={cceadLogo} placeholder="blur" alt="CCEAD Logo" />
								</picture>
							</a>
						</div>
						<div>
							<a href="https://www.google.com">
								<picture>
									<source srcSet={cbfLogo} type="image/svg+xml" />
									<Image src={cbfLogo} placeholder="blur" alt="CBF Logo" />
								</picture>
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
					.container {
						max-width: 1250px;
						margin-left: auto;
						margin-right: auto;
						padding: 0 1.5rem;
						display: flex;
						align-items: center;
						height: 100%;
					}
				`}
			</style>
		</>
	)
}
