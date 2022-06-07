export default function Skills(props) {
	return (
		<>
			<div className="icon-container">
				<i className={props.icon}></i>
				<p className="text-white fs-4 mt-3">{props.name}</p>
			</div>
			<style jsx>
				{`
					.icon-container {
						padding: 2rem;
						text-align: center;
					}
					i {
						font-size: 64px;
						color: #00e1bb;
					}
					p {
						font-size: 18px;
						font-weight: 300;
						color: #fff;
						margin-top: 1rem;
					}
				`}
			</style>
		</>
	)
}
