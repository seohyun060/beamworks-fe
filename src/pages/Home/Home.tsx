import React from 'react';
import './styles/home.styles.css';
import home_banner from '../../assets/images/HOME/home_banner.png';
import SideBarContainer from 'src/pages/SideBar/containers/SideBarContainer';
import HomeS1Container from './containers/HomeS1Container';
import HomeS2Container from './containers/HomeS2Container';
import HomeS4Container from './containers/HomeS4Container';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';

type Props = {};

const Home = (props: Props) => {
	return (
		<>
			{/* <SideBarContainer /> */}
			<div className='home'>
				<HomeS1Container />
				<HomeS2Container />
				<HomeS4Container />
				<FooterContainer />
			</div>
		</>
	);
};

export default Home;
