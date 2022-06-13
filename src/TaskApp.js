import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Continents from './components/pages/Continents';
import Home from './components/pages/Home';
import Countries from './components/pages/Countries';
import Admin from './components/pages/Admin';
import Saved from './components/pages/Saved';
import { BrowserRouter as Router } from 'react-router-dom';

export default function TaskApp() {
	return (
		<>
			<Router>
				<Navigation />
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route path="/countries" element={<Countries />}></Route>
					<Route path="/continents" element={<Continents />}></Route>
					<Route path="/saved" element={<Saved />}></Route>
					<Route path="/admin" element={<Admin />}></Route>
				</Routes>
				<Footer />
			</Router>
		</>
	);
}
