import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { PlanetCard } from '../../components';

const PlanetPage = () => {
	const [api, setApi] = useState([]);
	const [page, setPage] = useState(1);

	const fetchApi = async () => {
		axios
			.get(`https://swapi.dev/api/planets/`)
			.then((response) => setApi(response.data.results));
	};

	useEffect(() => {
		fetchApi();
	}, [page]);

	console.log(api);
	return (
		<>
			<div>
				<h1
					className="title"
					style={{
						color: 'white',
						boxShadow: '#ffee58',
					}}
				>
					PLANETS
				</h1>
			</div>
			<Container fluid="sm" className="container">
				{api.map((item) => (
					<PlanetCard
						name={item.name}
						diameter={item.diameter}
						gravity={item.gravity}
						terain={item.terain}
						population={item.population}
					/>
				))}
				{/* <>
					<Button
						variant="warning"
						onClick={setPage(page - 1)}
						disabled={offsetValue === 0 ? true : false}
					>
						Prev
					</Button>{' '}
					<Button variant="warning" onClick={setPage(page + 1)}>
						Next
					</Button>{' '}
				</> */}
			</Container>
		</>
	);
};

export default PlanetPage;
