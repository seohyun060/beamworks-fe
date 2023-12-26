import React from 'react';
import './styles/white.styles.css';
import WhiteBannerContainer from './containers/WhiteBannerContainer';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
type Props = {};

const White = (props: Props) => {
	return (
		<div className='white'>
			<WhiteBannerContainer />
			<FooterContainer />
		</div>
	);
};

export default White;
