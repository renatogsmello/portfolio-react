export default function Card(props) {
	return (
		<>
			<div className="card">
				<i className={props.icon}></i>
				<div className="card-body">
					<h4 className="card-title">{props.title}</h4>
					<p className="card-text">{props.text}</p>
				</div>
			</div>
			<style jsx>{`
				.card {
					background-color: #023b32;
					padding: 1.5rem;
					border-radius: 10px;
					border-bottom: 10px solid #00e1bb;
					height: 100%;
					position: relative;
				}
				.card-title {
					font-weight: bold;
					font-size: 24px;
					color: white;
					margin-top: 2rem;
				}
				.card-text {
					margin-top: 1rem;
					color: #85d4c7;
				}
				i {
					-webkit-text-fill-color: transparent;
					-webkit-text-stroke-width: 0.03em;
					-webkit-text-stroke-color: #00e1bb;
					font-size: 2.1em;
					position: absolute;
					top: -35px;
					background-color: #03483d;
					padding: 1rem;
					border-radius: 50%;
					width: 77px;
					border: 5px solid #013129;
				}
				i.fa-sitemap,
				i.fa-code {
					font-size: 1.8em;
				}
			`}</style>
		</>
	)
}
