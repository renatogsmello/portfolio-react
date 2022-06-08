import React from "react"
export default function Contato() {
	return (
		<>
			<section id="Contato">
				<div className="container">
					<h1 className="section-title">Contato</h1>
					<div className="contato-container">
						<a href="mailto:renatogsmello@gmail.com" target="_blank" rel="noreferrer">
							<i className="fas fa-envelope"></i>
						</a>
						<a href="https://github.com/renatogsmello" target="_blank" rel="noreferrer">
							<i className="fab fa-github"></i>
						</a>
						<a href="https://www.linkedin.com/in/renato-mello-20a5a84a/" target="_blank" rel="noreferrer">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</div>
			</section>
			<style jsx>
				{`
					section {
						height: 100%;
						padding: 4rem 1.5rem;
						background-color: #013129;
					}
					.container {
						max-width: 1250px;
						margin-left: auto;
						margin-right: auto;
					}
					.contato-container {
						display: flex;
						justify-content: center;
					}
					a {
						border: 1px solid #00e1bb;
						background-color: transparent;
						border-radius: 0.25rem;
						color: #00e1bb;
						padding: 0.65rem 1rem;
						cursor: pointer;
						font-size: 2em;
						margin: 0 1.5rem;
					}
					a:hover {
						background-color: #00e1bb;
						color: #000;
					}
					@media screen and (max-width: 768px) {
						h1.section-title {
							font-size: 3.5em;
							color: #0a8b75;
						}
						.contato-container {
							margin-top: 2rem;
						}
					}
				`}
			</style>
		</>
	)
}
