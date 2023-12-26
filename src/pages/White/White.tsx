import React from 'react';
import './styles/white.styles.css';
import WhiteBannerContainer from './containers/WhiteBannerContainer';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import WhiteListContainer from './containers/WhiteListContainer';
type Props = {};

const White = (props: Props) => {
	return (
		<div className='white'>
			<WhiteBannerContainer />
			<WhiteListContainer />
			<FooterContainer />
		</div>
	);
};

export default White;
