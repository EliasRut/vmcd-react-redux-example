import './Card.css';

function Card(props) {
	return (
		<div
			className={props.isActive ? 'storyCard active' : 'storyCard'}
			onClick={props.onClick}
		>
			<div className="overlay"></div>
			<div className="headerContent">
				<img src={props.imgSrc} />
				<h3>{props.title}</h3>
			</div>
			<div className="mainContent">
				<div>{props.children}</div>
			</div>
		</div>
	)
}

export default Card;