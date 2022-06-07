import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ButtonRounded } from "./Buttons"

export default function Menu() {
	return (
		<>
			<nav>
				<Link href={"/"}>
					<picture>
						<source srcSet="/imagens/logo.svg" type="image/svg+xml" />
						<Image src="/imagens/logo.svg" width="157px" height="40px" alt="Logo" />
					</picture>
				</Link>

				<MenuItens itens={["Habilidades", "Experiência", "Portfolio", "Contato"]} />
				<ButtonRounded>
					<a href="../../files/cv_renato_mello.pdf" target="_blank">
						<i className="fas fa-cloud-download-alt"></i>Baixar CV
					</a>
				</ButtonRounded>
			</nav>
			<style jsx>
				{`
					nav {
						height: 7vh;
						display: flex;
						justify-content: space-between;
						align-items: center;
						color: white;
						padding: 0.5rem 1.5rem;
						margin-left: auto;
						margin-right: auto;
						max-width: 1250px;
					}
					picture {
						cursor: pointer;
					}
					i {
						margin-right: 0.75rem;
					}
					a {
						// color: #48eed2;
						text-decoration: none;
					}
					a:hover {
						background-color: #00e1bb;
						color: #000;
					}
				`}
			</style>
		</>
	)
}

function MenuItens(props) {
	const [isOpen, setOpenState] = React.useState("hide")
	return (
		<>
			<ul className={isOpen ? "hide" : "show"}>
				{props.itens.map((item, index) => {
					const itemSemAcento = item.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
					return (
						<li key={index}>
							<Link href={`/#${itemSemAcento}`}>
								<a>{item}</a>
							</Link>
						</li>
					)
				})}
			</ul>
			<button onClick={() => setOpenState(!isOpen)}>
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</button>
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
					a:hover {
						color: #00e1bb;
					}
					button {
						display: none;
						background: none;
						border: none;
					}
					button div {
						width: 25px;
						height: 3px;
						background-color: rgb(226, 226, 226);
						margin: 5px;
					}

					@media screen and (max-width: 768px) {
						ul {
							position: absolute;
							right: 0px;
							height: 93vh;
							top: 7vh;
							flex-direction: column;
							align-items: center;
							background-color: #013129;
							width: 50%;
							justify-content: space-around;
							transform: translateX(0%);
							transition: transform 0.5s ease-in;
						}
						ul.hide {
							transform: translateX(100%);
						}

						li {
							opacity: 0;
						}
						ul.show li {
							opacity: 1;
						}
						button {
							display: block;
							cursor: pointer;
						}
					}
				`}
			</style>
		</>
	)
}
