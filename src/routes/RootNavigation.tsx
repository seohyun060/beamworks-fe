import HomeContainer from "src/pages/Home/containers/HomeContainer";
import GnbContainer from "src/pages/Gnb/containers/GnbContainer";
import AwardContainer from "src/pages/Award/containers/AwardContainer";
import Introduce from "src/pages/Introduce/Introduce";
import Culture from "src/pages/Culture/Culture";
import Jobs from "src/pages/Jobs/Jobs";
import Team from "src/pages/Team/Team";
import CadContainer from "src/pages/Cad/containers/CadContainer";
import ChatAIContainer from "src/pages/ChatAI/containers/ChatAIContainer";
import CadBContainer from "src/pages/CadB/containers/CadBContainer";
import Contact from "src/pages/Contact/Contact";
import CadRContainer from "src/pages/CadR/containers/CadRContainer";
import Orca from "src/pages/Orca/Orca";

import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	useLocation,
	Route,
	Routes,
} from 'react-router-dom';
import './styles/rootnavigation.style.css';
import EeasyContainer from 'src/pages/Eeasy/containers/EeasyContainer';

const RootNavigation = () => {
	const location = useLocation();
	return (
		<>
			<GnbContainer location={location.pathname} />
			<Routes location={location}>
				<Route path='/' element={<HomeContainer />} />
				<Route path='/introduce' element={<Introduce />} />
				<Route path='/award' element={<AwardContainer />} />
				<Route path='/culture' element={<Culture />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/team/marketing&design" element={<Team jobName="marketing&design"/>} />
				<Route path="/team/research&development" element={<Team jobName="research&development"/>} />
				<Route path="/team/operations" element={<Team jobName="operations"/>} />
				<Route path="/team/GMP" element={<Team jobName="GMP"/>} />
				<Route path="/team/regulatory_strategy" element={<Team jobName="regulatory_strategy"/>} />
				<Route path='/chatai' element={<ChatAIContainer />} />
				<Route path='/product' element={<CadContainer />} />
				<Route path='/cadb' element={<CadBContainer />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/cadr' element={<CadRContainer />} />
				<Route path='/eeasy' element={<EeasyContainer />} />
				<Route path='/orca' element={<Orca />} />
				<Route path='/Jobs' element={<Jobs />} />
			</Routes>
		</>
	);
};

export default RootNavigation;
