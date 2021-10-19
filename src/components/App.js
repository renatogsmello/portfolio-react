import React from "react"
import Menu from "./Menu.js"
import Inicio from "./Inicio.js"
import ExpProfissional from "./ExpProfissional.js"
import Habilidades from "./Habilidades.js"
import Portfolio from "./Portfolio.js"
import Contato from "./Contato.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
	return (
		<>
			<Router>
				<Menu />
				<Switch>
					<Route exact path="/" component={Inicio} />
					<Route exact path="/#habilidades" component={Habilidades} />
					<Route exact path="/#experiencia-profissional" component={ExpProfissional} />
					<Route exact path="/#portfolio" component={Portfolio} />
					<Route exact path="/#contato" component={Contato} />
				</Switch>
			</Router>
			<Habilidades />
			<ExpProfissional />
		</>
	)
}
export default App
