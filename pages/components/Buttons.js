export function Button(props) {
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
					}
					button:hover {
						background-color: #05bf9f;
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
						color: #fff;
						padding: 0.65rem 1rem;
						cursor: pointer;
					}
					button:hover {
						background-color: #00e1bb;
						color: #000;
					}
				`}
			</style>
		</>
	)
}
