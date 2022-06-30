import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<div className="header" as={Link} to={`/`}>
				<div className="title">STAR</div>
				<div className="sub">PEDIA</div>
				<div className="title">WARS</div>
			</div>
			<div>
				<Nav
					fill
					variant="tabs"
					defaultActiveKey="/home"
					className="sub"
					style={{ marginTop: '0', marginBottom: '0' }}
				>
					<Nav.Item>
						<Nav.Link as={Link} to={'/'}>
							<p style={{ color: 'white' }}>Film</p>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link as={Link} to={'/Planet'}>
							<p style={{ color: 'white' }}>Planet</p>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link as={Link} to={'/Character'}>
							<p style={{ color: 'white' }}>Character</p>
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</div>
		</>
	);
};

export default Header;
