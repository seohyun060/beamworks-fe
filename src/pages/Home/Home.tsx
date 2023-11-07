import React from 'react';
import './styles/home.styles.css';
import home_banner from '../../assets/images/HOME/home_banner.png';
import SideBarContainer from 'src/pages/SideBar/containers/SideBarContainer';
import HomeS1Container from './containers/HomeS1Container';
import HomeS2Container from './containers/HomeS2Container';
import HomeS3Container from './containers/HomeS3Container';
import HomeS4Container from './containers/HomeS4Container';
type Props = {};

const Home = (props: Props) => {
	return (
		<>
			<SideBarContainer />
			<div className='home'>
				<HomeS1Container />
				<HomeS2Container />
				<HomeS3Container />
				<HomeS4Container />
			</div>
		</>
	);
};

export default Home;
