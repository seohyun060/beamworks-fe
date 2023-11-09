import React from 'react';
import AwardS1Container from './containers/AwardS1Container';
import AwardS2Container from './containers/AwardS2Container';
import './styles/award.styles.css';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
type Props = {};

const Award = (props: Props) => {
	return (
		<div className='award'>
			<AwardS1Container />
			<AwardS2Container />
			<FooterContainer />
		</div>
	);
};

export default Award;
