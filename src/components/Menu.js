import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import logo from "../imagens/logo.png"
import { NavHashLink } from "react-router-hash-link"

export default function Menu() {
	return (
		<>
			<Navbar bg="transparent" variant="dark" expand="lg" className="position-absolute start-0 end-0 pt-4">
				<Container>
					<Navbar.Brand>
						<img src={logo} alt="logo"></img>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="m-auto">
							<NavHashLink smooth to="/#habilidades" className="nav-link mx-3">
								Habilidades
							</NavHashLink>
							<NavHashLink to="/#experiencia-profissional" className="nav-link mx-3">
								Experiência Profissional
							</NavHashLink>
							<NavHashLink to="/#portfolio" className="nav-link mx-3">
								Portfolio
							</NavHashLink>
							<NavHashLink to="/#contato" className="nav-link mx-3">
								Contato
							</NavHashLink>
						</Nav>
						<Button variant="outline-success" className="btn rounded-pill">
							<i className="bi-download me-2"></i>Baixar CV
						</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}
