import React from "react"
import Card from "./components/Cards"
import Skills from "./components/Skills"

export default function Habilidades() {
	return (
		<>
			<section id="Habilidades">
				<div className="container">
					<h1 className="section-title">Habilidades</h1>
					<div className="card-container">
						<Card icon="fas fa-pencil-ruler" title="Design UI/UX" text="" />
						<Card icon="fas fa-sitemap" title="Web Design" text="" />
						<Card icon="fas fa-code" title="Desenvolvimento Front End" text="" />
					</div>
					<div id="skills-icons" className="row mt-5">
						<Skills icon="devicon-figma-plain" name="Figma" />
						<Skills icon="devicon-html5-plain" name="HTML" />
						<Skills icon="devicon-css3-plain" name="CSS" />
						<Skills icon="devicon-tailwindcss-plain" name="Tailwindcss" />
						<Skills icon="devicon-javascript-plain" name="Javascript" />
						<Skills icon="devicon-react-original" name="React" />
						<Skills icon="devicon-bootstrap-plain" name="Bootstrap" />
						<Skills icon="devicon-github-original" name="Github" />
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
					.card-container {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
						gap: 3.25rem;
					}
					#skills-icons {
						margin-top: 4rem;
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
						gap: 1.25rem;
					}
					@media screen and (max-width: 768px) {
						h1 {
							font-size: 3.5em;
						}
						.card-container {
							margin-top: 1rem;
							grid-template-columns: 1fr;
						}
						#skills-icons {
							grid-template-columns: 50% 2fr;
						}
					}
				`}
			</style>
		</>
	)
}
