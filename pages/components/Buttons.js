export default function Button(props) {
	return (
		<>
			<button type="button">{props.children}</button>
			<style jsx>
				{`
					button {
						background-color: #00e1bb;
						border: none;
						padding: 0.65rem 1rem;
						border-radius: 0.25rem;
						cursor: pointer;
						font-size: 1em;
					}
					button:hover {
						background-color: #05bf9f;
					}
					@media screen and (max-width: 768px) {
						button {
							width: 100%;
						}
					}
				`}
			</style>
		</>
	)
}

export function ButtonOutline(props) {
	return (
		<>
			<button type="button">{props.children}</button>
			<style jsx>
				{`
					button {
						border: 1px solid #00e1bb;
						background-color: transparent;
						border-radius: 0.25rem;
						color: #00e1bb;
						padding: 0.65rem 1rem;
						cursor: pointer;
						font-size: 1em;
					}
					button:hover {
						background-color: #00e1bb;
						color: #000;
					}
					@media screen and (max-width: 768px) {
						button {
							width: 100%;
						}
					}
				`}
			</style>
		</>
	)
}

export function ButtonRounded(props) {
	return (
		<>
			<button type="button">{props.children}</button>
			<style jsx>{`
				button {
					border: 1px solid #00e1bb;
					background-color: transparent;
					border-radius: 0.25rem;
					color: #00e1bb;
					padding: 0.65rem 1rem;
					cursor: pointer;
					font-size: 1em;
					border-radius: 2rem;
					display: ${props.display == "none" ? "none" : "block"};
				}
				button:hover {
					background-color: #00e1bb;
					color: #000;
				}
			`}</style>
		</>
	)
}
