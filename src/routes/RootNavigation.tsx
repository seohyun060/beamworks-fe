import HomeContainer from 'src/pages/Home/containers/HomeContainer';
import GnbContainer from 'src/pages/Gnb/containers/GnbContainer';

import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	useLocation,
	Route,
	Routes,
} from 'react-router-dom';
import './styles/rootnavigation.style.css';

const RootNavigation = () => {
	const location = useLocation();
	return (
		<>
			<GnbContainer location={location.pathname} />
			<Routes location={location}>
				<Route path='/' element={<HomeContainer />} />
			</Routes>
		</>
	);
};

export default RootNavigation;
