import HomeContainer from 'src/pages/Home/containers/HomeContainer';
import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	useLocation,
	Route,
	Routes,
} from 'react-router-dom';
import './styles/rootnavigation.style.css';

const RootNavigation = () => {
	const [key, setkey] = useState('');
	useEffect(() => {
		setkey(new Date().getSeconds().toString());
	}, [key]);
	const location = useLocation();
	return (
		<Routes location={location}>
			<Route path='/' element={<HomeContainer />} />
		</Routes>
	);
};

export default RootNavigation;
