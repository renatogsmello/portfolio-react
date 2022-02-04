import React from "react"

export default function Habilidades() {
	return (
		<>
			<section id="Habilidades" style={{ height: "100vh", marginTop: "70px", padding: "4rem 1.5rem" }} className="bg-principal vh-100">
				<div className="container">
					<h1 className="pt-5 section-title">Habilidades</h1>
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
							title="Desenvolvimento Web"
							text="Some quick example text to build on the card title and make up the bulk of the card's content."
						/>
					</div>
					<div id="skills-icons" className="row mt-5">
						<div className="col text-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="63.59" height="62" viewBox="0 0 63.59 62">
								<path
									id="Icon_simple-adobexd"
									data-name="Icon simple-adobexd"
									d="M52.329.75H11.261A11.251,11.251,0,0,0,0,12.011V51.489A11.251,11.251,0,0,0,11.261,62.75H52.329A11.251,11.251,0,0,0,63.59,51.489V12.011A11.251,11.251,0,0,0,52.329.75Zm8.585,49.706A9.6,9.6,0,0,1,51.322,60.1H12.268A9.634,9.634,0,0,1,2.65,50.482V13.018A9.634,9.634,0,0,1,12.268,3.4H51.3a9.618,9.618,0,0,1,9.618,9.618V50.456ZM25.144,29.763l7.419,14.255c.132.212.053.424-.159.424h-4.61a.52.52,0,0,1-.556-.344c-1.7-3.5-3.418-6.995-5.193-10.757h-.053c-1.59,3.55-3.338,7.286-5.034,10.784a.509.509,0,0,1-.477.291H12.109c-.265,0-.291-.212-.159-.371l7.26-13.831-7.021-13.99a.214.214,0,0,1,.159-.371H16.9a.417.417,0,0,1,.477.291c1.669,3.5,3.365,7.1,4.955,10.625h.053c1.537-3.5,3.232-7.127,4.875-10.6.132-.212.212-.344.477-.344h4.266c.212,0,.291.159.159.371L25.144,29.763Zm8.717,4.319c0-6.174,4.107-11,10.625-11a11.75,11.75,0,0,1,1.378.053V16.118a.266.266,0,0,1,.265-.265h4.186c.212,0,.265.079.265.212V40.388a18.872,18.872,0,0,0,.132,2.6c0,.159-.053.212-.212.291a15.783,15.783,0,0,1-6.783,1.537c-5.75.026-9.856-3.524-9.856-10.731Zm12-6.783a4.007,4.007,0,0,0-1.537-.265c-3.338,0-5.67,2.57-5.67,6.836,0,4.875,2.385,6.836,5.379,6.836a5,5,0,0,0,1.828-.291V27.3Z"
									transform="translate(0 -0.75)"
									fill="#00e1bb"
								/>
							</svg>
							<p className="text-white fs-4 mt-3">Adobe Xd</p>
						</div>
						<div className="col text-center">
							<i className="fab fa-html5 display-4"></i>
							<p className="text-white fs-4 mt-3">HTML</p>
						</div>
						<div className="col text-center">
							<i className="fab fa-css3 display-4"></i>
							<p className="text-white fs-4 mt-3">CSS</p>
						</div>
						<div className="col text-center">
							<i className="fab fa-sass display-4"></i>
							<p className="text-white fs-4 mt-3">SASS</p>
						</div>
						<div className="col text-center">
							<i className="fab fa-js-square display-4"></i>
							<p className="text-white fs-4 mt-3">Javascript</p>
						</div>
						<div className="col text-center">
							<i className="fab fa-react display-4"></i>
							<p className="text-white fs-4 mt-3">React</p>
						</div>
					</div>
				</div>
			</section>
			<style jsx>
				{`
					section {
						height: 100vh;
						margin-top: 70px;
						padding: 4rem 1.5rem;
					}
					.card-container {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
						gap: 1.25rem;
					}
				`}
			</style>
		</>
	)
}

function Card(props) {
	console.log(props)
	return (
		<>
			<div className="card">
				<i className={props.icon}></i>
				<div className="card-body">
					<h4 className="card-title">{props.title}</h4>
					<h5 className="card-text">{props.text}</h5>
				</div>
			</div>
			<style jsx>{`
				.card {
					padding: 1.25rem;
					background-color: #023b32;
					color: #fff;
				}
			`}</style>
		</>
	)
}
