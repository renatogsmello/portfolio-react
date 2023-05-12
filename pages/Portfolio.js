import React from "react"
import { PortfolioCard } from "./components/Cards"

export default function Portfolio() {
	const projects = [
		{
			id: 1,
			link: "https://movies-list-plum.vercel.app",
			title: "Favorite Movies List",
			img: "imagens/projects/favorite_movies_list.png",
			description: 'O objetivo será consumir a API de filmes do "The Movie DataBase" com JavaScript puro. #7daysOfCode #alura',
			tags: ["HTML", "CSS", "Javascript", "API"],
		},
		{
			id: 2,
			link: "https://7-days-of-react.vercel.app",
			title: "Casa Verde",
			img: "imagens/projects/casa_verde.png",
			description: "Criação e consumo de API para envio de email e catalogo de produtos em um projeto React #7daysOfCode #alura",
			tags: ["React", "API"],
		},
		{
			id: 3,
			link: "https://logica-javascript.vercel.app/lista-compras.html",
			title: "Lista de Compras",
			img: "imagens/projects/lista_compras.png",
			description: "Criação de uma lista de compras dinâmica utilizando Arrays no Javascript puro #7daysOfCode #alura",
			tags: ["HTML", "CSS", "Javascript"],
		},
		{
			id: 4,
			link: "https://logica-javascript.vercel.app/calculator.html",
			title: "Calculadora",
			img: "imagens/projects/calculadora.png",
			description:
				"Criação de uma calculadora que resolve as operações de adição, subtração, multiplicação e divisão no Javascript puro #7daysOfCode #alura",
			tags: ["HTML", "CSS", "Javascript"],
		},
		{
			id: 5,
			link: "https://calendario-aniversarios.vercel.app",
			title: "Lista de Aniversários",
			img: "imagens/projects/calendario_aniversarios.png",
			description: "Cria, edita, deleta itens de uma lista de aniversariantes e salva os dados no localStorage #7daysOfCode #alura",
			tags: ["HTML", "CSS", "Javascript", "localStorage"],
		},
		{
			id: 6,
			link: "https://alura-cord-gold.vercel.app",
			title: "AluraCord",
			img: "imagens/projects/alura_cord.png",
			description: "Criação de um chat usando React e salvando a conversa no Database da Supabase #ImersãoReact #alura",
			tags: ["HTML", "CSS", "Supabase", "React"],
		},
	]

	return (
		<>
			<section id="Portfolio" className="h-auto bg-green-800 pl-6">
				<div className="container mx-auto">
					<h1 className="-rotate-6 mb-28 font-display lg:text-8xl md:text-6xl md:text-green-400">Portfolio</h1>
					<div className="grid grid-cols-3 gap-8">
						{projects.map((project) => (
							<PortfolioCard
								id={project.id}
								link={project.link}
								title={project.title}
								img={project.img}
								description={project.description}
								tags={project.tags}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
