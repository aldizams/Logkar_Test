import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MyCard = (props) => {
	return (
		<Card className="crd">
			<Card.Body className="crd-bdy">
				<h1 className="title">{props.title}</h1>
				<div className="sub">
					<p>{props.opening}</p>
					<p>Directed By: {props.director}</p>
					<p>Produced By: {props.producer}</p>
					<p>Release Date: {props.release}</p>
				</div>
			</Card.Body>
		</Card>
	);
};

export default MyCard;
