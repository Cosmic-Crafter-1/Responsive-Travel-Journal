
import "./Card.css"

export default function Card(props) {
	console.log(props)

	return (
		<div className="card">
			<div className="image-wrapper">
				<img src={props.card.imageUrl} alt={`Image of ${props.card.title}`} />
			</div>
			<div className="text-wrapper">
				<div className="country-wrapper">
					<h2 className="location">{props.card.location}</h2>
					<a href={props.card.googleMapsUrl} target="_blank" className="googleMapsUrl"> View on Google Maps </a>
				</div>
				<h1 className="title">{props.card.title}</h1>
				<h4 className="time">{`${props.card.startDate} - ${props.card.endDate}`}</h4>
				<p className="description">
					{props.card.description}
				</p>

				<hr />
				
			</div>
		</div>
	)
}