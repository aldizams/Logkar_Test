import './App.css';
import { Header, Footer } from './components';
import { Home, CharaPage, PlanetPage } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Planet" element={<PlanetPage />} />
				<Route path="/Character" element={<CharaPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
