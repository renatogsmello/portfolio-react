// import "../public/styles/style.min.css"
import "../public/fonts/fontawesome-free-5/css/all.css"

function GlobalStyle() {
	return (
		<style global jsx>
			{`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					list-style: none;
				}
				html {
					scroll-behavior: smooth;
				}
				body {
					font-family: "Open Sans", sans-serif;
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
