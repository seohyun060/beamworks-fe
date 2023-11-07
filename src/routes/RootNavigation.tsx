import HomeContainer from 'src/pages/Home/containers/HomeContainer';
import GnbContainer from 'src/pages/Gnb/containers/GnbContainer';

import Introduce from 'src/pages/Introduce/Introduce';

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
				<Route path='/introduce' element={<Introduce />} />
			</Routes>
		</>
	);
};

export default RootNavigation;
