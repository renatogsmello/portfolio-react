import "../public/fonts/fontawesome-free-5/css/all.css"
import "../public/fonts/devicon/devicon.min.css"
import "../public/styles/globals.css"

function GlobalStyle() {
	return (
		<style global jsx>
			{`
				@font-face {
					font-family: PermanentMarker;
					src: url(../fonts/PermanentMarker-Regular.ttf);
				}
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					list-style: none;
					font-family: "Montserrat", sans-serif;
				}
				html {
					scroll-behavior: smooth;
				}
				.section-title {
					font-family: PermanentMarker;
					font-size: 100px;
					color: #085346;
					transform: rotate(357deg);
				}
				@media screen and (max-width: 768px) {
					#__next {
						overflow-x: hidden;
					}
				}
				a {
					color: #48eed2;
				}
			`}
		</style>
	)
}

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
