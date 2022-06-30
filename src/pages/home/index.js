import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MyCard } from '../../components';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
	const [api, setApi] = useState([]);
	const fetchApi = async () => {
		axios
			.get('https://swapi.dev/api/films')
			.then((response) => setApi(response.data.results));
	};
	useEffect(() => {
		fetchApi();
	}, []);
	console.log(api);
	return (
		<>
			<div>
				<h1
					className="title"
					style={{
						color: 'white',
					}}
				>
					FILMS
				</h1>
			</div>
			<Container fluid="sm" className="container">
				{api.map((item) => (
					<MyCard
						title={item.title}
						id={item.episode_id}
						opening={item.opening_crawl}
						director={item.director}
						producer={item.producer}
						release={item.release_date}
					/>
				))}
			</Container>
		</>
	);
};

export default Home;
