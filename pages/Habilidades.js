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
						<Card
							icon="fas fa-pencil-ruler"
							title="Design UI/UX"
							text="Some quick example text to build on the card title and make up the bulk of the card's content."
						/>
						<Card
							icon="fas fa-sitemap"
							title="Web Design"
							text="Some quick example text to build on the card title and make up the bulk of the card's content."
						/>
						<Card
							icon="fas fa-code"
							title="Desenvolvimento Front End"
							text="Some quick example text to build on the card title and make up the bulk of the card's content."
						/>
					</div>
					<div id="skills-icons" className="row mt-5">
						<Skills icon="devicon-xd-plain" name="Adobe Xd" />
						<Skills icon="devicon-html5-plain" name="HTML" />
						<Skills icon="devicon-css3-plain" name="CSS" />
						<Skills icon="devicon-sass-original" name="SASS" />
						<Skills icon="devicon-javascript-plain" name="Javascript" />
						<Skills icon="devicon-react-original" name="React" />
						<Skills icon="devicon-bootstrap-plain" name="Bootstrap" />
						<Skills icon="devicon-tailwindcss-plain" name="Tailwindcss" />
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
				`}
			</style>
		</>
	)
}
