import React from 'react';
import '../Home/styles/home.styles.css';
import home_banner from '../../assets/images/HOME/home_banner.png';
import SideBarContainer from 'src/pages/SideBar/containers/SideBarContainer';
type Props = {};

const Home = (props: Props) => {
	return (
		<>
			<SideBarContainer />
			<div className='home'>
				<div className='a'></div>
				<div className='b'></div>
				<div className='a'></div>
				<div className='b'></div>
			</div>
		</>
	);
};

export default Home;
