import React from 'react';
import './styles/home.styles.css';
import home_banner from '../../assets/images/HOME/home_banner.png';
import SideBarContainer from 'src/pages/SideBar/containers/SideBarContainer';
import Section1Container from './containers/Section1Container';
import Section2Container from './containers/Section2Container';
import Section3Container from './containers/Section3Container';
import Section4Container from './containers/Section4Container';
type Props = {};

const Home = (props: Props) => {
	return (
		<>
			<SideBarContainer />
			<div className='home'>
				<Section1Container />
				<Section2Container />
				<Section3Container />
				<Section4Container />
			</div>
		</>
	);
};

export default Home;
