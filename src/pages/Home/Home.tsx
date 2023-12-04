import React from 'react';
import './styles/home.styles.css';
import home_banner from '../../assets/images/HOME/home_banner.png';
import SideBarContainer from 'src/pages/SideBar/containers/SideBarContainer';
import HomeBannerContainer from './containers/HomeBannerContainer';
import HomeTechContainer from './containers/HomeTechContainer';
import HomeNewsContainer from './containers/HomeNews';
import HomeFindContainer from './containers/HomeFindContainer';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';

type Props = {};

const Home = (props: Props) => {
	return (
		<>
			{/* <SideBarContainer /> */}
			<div className='home'>
				<HomeBannerContainer />
				<HomeTechContainer />
				<HomeNewsContainer />
				<HomeFindContainer />
				<FooterContainer />
			</div>
		</>
	);
};

export default Home;
