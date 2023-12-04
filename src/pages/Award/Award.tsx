import React from 'react';
import AwardBannerContainer from './containers/AwardBannerContainer';
import AwardHistoryContainer from './containers/AwardHistoryContainer';
import './styles/award.styles.css';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
type Props = {};

const Award = (props: Props) => {
	return (
		<div className='award'>
			<AwardBannerContainer />
			<AwardHistoryContainer />
			<FooterContainer />
		</div>
	);
};

export default Award;
