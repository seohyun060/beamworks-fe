import HomeContainer from 'src/pages/Home/containers/HomeContainer';
import GnbContainer from 'src/pages/Gnb/containers/GnbContainer';
import AwardContainer from 'src/pages/Award/containers/AwardContainer';
import Introduce from 'src/pages/Introduce/Introduce';
import Culture from 'src/pages/Culture/Culture';
import Jobs from 'src/pages/Jobs/Jobs';
import Team from 'src/pages/Team/Team';
import Recruitment from 'src/pages/Recruitment/Recruitment';
import CadContainer from 'src/pages/Cad/containers/CadContainer';
import ChatAIContainer from 'src/pages/ChatAI/containers/ChatAIContainer';
import CadBContainer from 'src/pages/CadB/containers/CadBContainer';
import Contact from 'src/pages/Contact/Contact';
import CadRContainer from 'src/pages/CadR/containers/CadRContainer';
import Orca from 'src/pages/Orca/Orca';

import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	useLocation,
	Route,
	Routes,
} from 'react-router-dom';
import './styles/rootnavigation.style.css';
import EeasyContainer from 'src/pages/Eeasy/containers/EeasyContainer';
import NewsContainer from 'src/pages/News/containers/NewsContainer';
import YoutubeContainer from 'src/pages/Youtube/containers/YoutubeContainer';
import PublicationContainer from 'src/pages/Publication/containers/PublicationContainer';
import WhiteContainer from 'src/pages/White/containers/WhiteContainer';
import IDetailContainer from 'src/pages/IDetail/containers/IDetailContainer';
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
				<Route path='/jobs' element={<Jobs />} />
				<Route path='/team/CST' element={<Team jobName='CST' />} />
				<Route path='/team/RDT' element={<Team jobName='RDT' />} />
				<Route path='/team/MST' element={<Team jobName='MST' />} />
				<Route path='/team/GST' element={<Team jobName='GST' />} />
				<Route path='/team/RST' element={<Team jobName='RST' />} />
				<Route path='/Recruitment' element={<Recruitment />} />
				<Route path='/chatai' element={<ChatAIContainer />} />
				<Route path='/product' element={<CadContainer />} />
				<Route path='/cadb' element={<CadBContainer />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/cadr' element={<CadRContainer />} />
				<Route path='/eeasy' element={<EeasyContainer />} />
				<Route path='/orca' element={<Orca />} />
				<Route path='/Jobs' element={<Jobs />} />
				<Route path='/news' element={<NewsContainer />} />
				<Route path='/youtube' element={<YoutubeContainer />} />
				<Route path='/publication' element={<PublicationContainer />} />
				<Route path='/white' element={<WhiteContainer />} />
				<Route path='/idetail/:id' element={<IDetailContainer />} />
			</Routes>
		</>
	);
};

export default RootNavigation;
