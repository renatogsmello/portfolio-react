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

export function PortfolioCard({ id, link, title, img, description, tags }) {
	return (
		<a key={id} href={link} target="_blank" className="hover:bg-teal-900/50 rounded-xl p-2">
			<div className="flex flex-col gap-3 relative">
				<div className="relative basis-5/12 p-2">
					<div className="bg-teal-700/95 rounded-full flex items-center justify-center py-2 px-4 text-green-200 absolute -bottom-2 inset-x-0 z-10">
						{title}
					</div>
					<img className="rounded-2xl" src={img} />
				</div>
				<div className="flex flex-col basis-7/12 py-2 px-4 gap-3">
					<p className="text-green-100">{description}</p>
					<div className="flex gap-2">
						{tags.map((tag) => (
							<span key={id + tag} className="bg-green-100 px-3 py-1 rounded-full text-sm text-green-600">
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</a>
	)
}
