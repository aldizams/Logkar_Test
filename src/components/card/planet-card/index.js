import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PlanetCard = (props) => {
	return (
		<Card className="crd">
			<Card.Body className="crd-bdy">
				<h1 className="title">{props.name}</h1>
				<div className="sub">
					<p>Diameter: {props.diameter}</p>
					<p>Gravity: {props.gravity}</p>
					<p>Terain: {props.terain}</p>
					<p>Population: {props.population}</p>
				</div>
			</Card.Body>
		</Card>
	);
};

export default PlanetCard;
