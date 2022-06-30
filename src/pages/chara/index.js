import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { CharaCard } from '../../components';

const CharaPage = () => {
	const [api, setApi] = useState([]);
	const [page, setPage] = useState(1);
	const [load, setLoad] = useState(true);
	const fetchApi = async () => {
		axios
			.get(`https://swapi.dev/api/people`)
			.then((response) => setApi(response.data.results));
	};
	useEffect(() => {
		fetchApi();
	}, [page]);

	componentDidMount{
		// this simulates an async action, after which the component will render the content
		demoAsyncCall().then(() => this.setState({ loading: false }));
	  }
	console.log(api);
	if (load) {
		return null;
	}
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
					CHARACTERS
				</h1>
			</div>
			<Container fluid="sm" className="container">
				{api.map((item) => (
					<CharaCard
						name={item.name}
						gender={item.gender}
						height={item.height}
						year={item.birth_year}
						eye={item.eye_color}
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

export default CharaPage;
