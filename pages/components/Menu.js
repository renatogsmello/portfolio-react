import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Menu() {
	return (
		<>
			<nav>
				<picture>
					<source srcSet="/imagens/logo.png" type="image/svg+xml" />
					<Image src="/imagens/logo.png" width="157px" height="40px" alt="Logo" />
				</picture>

				<MenuItens itens={["Habilidades", "Experiência Profissional", "Portfolio", "Sobre"]} />
			</nav>
			<style jsx>
				{`
					nav {
						height: 70px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						color: white;
						padding: 0.5rem 1.5rem;
						margin-left: auto;
						margin-right: auto;
						max-width: 1250px;
					}
				`}
			</style>
		</>
	)
}

function MenuItens(props) {
	console.log(props.itens)
	return (
		<>
			<ul>
				{props.itens.map((item) => {
					return (
						<li>
							<Link href={`/#${item}`}>
								<a>{item}</a>
							</Link>
						</li>
					)
				})}
			</ul>
			<style jsx>
				{`
					ul {
						display: flex;
						margin: 0;
						padding: 0;
					}
					a {
						padding: 1rem;
						text-decoration: none;
						color: white;
					}
				`}
			</style>
		</>
	)
}
