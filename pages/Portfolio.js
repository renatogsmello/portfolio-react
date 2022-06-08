import React from "react"

export default function Portfolio() {
	return (
		<>
			<section id="Portfolio">
				<div className="container">
					<h1 className="section-title">Portfolio</h1>
					<div className="exp-container">
						<h2>Em Breve!</h2>
					</div>
				</div>
			</section>
			<style jsx>
				{`
					section {
						height: 500px;
						background-color: #013129;
					}

					.container {
						max-width: 1250px;
						margin-left: auto;
						margin-right: auto;
						padding: 0 1.5rem;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						height: 100%;
					}
					h2 {
						text-align: center;
						color: #fff;
						font-size: 3em;
					}
					@media screen and (max-width: 768px) {
						h1.section-title {
							font-size: 3.5em;
							color: #0a8b75;
						}
					}
				`}
			</style>
		</>
	)
}
