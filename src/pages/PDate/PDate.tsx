import React from 'react';
import './styles/pdate.styles.css';
import PDateBannerContainer from './containers/PDateBannerContainer';
import PDateListContainer from './containers/PDateListContainer';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
type Props = {};

const PDate = (props: Props) => {
	return (
		<div className='pdate'>
			<PDateBannerContainer />
			<PDateListContainer />
			<FooterContainer />
		</div>
	);
};

export default PDate;
