import React from 'react';
import { Card } from 'react-bootstrap';

const CharaCard = (props) => {
	return (
		<Card className="crd">
			<Card.Body className="crd-bdy">
				<h1 className="title">{props.name}</h1>
				<div className="sub">
					<p>Gender : {props.gender}</p>
					<p>Height : {props.height}</p>
					<p>Year : {props.year}</p>
					<p>Eye Color: {props.eye}</p>
				</div>
			</Card.Body>
		</Card>
	);
};

export default CharaCard;
