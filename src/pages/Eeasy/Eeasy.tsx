import React from 'react';
import images from 'src/assets/images';
import './styles/eeasy.styles.css';
import EeasyS1Container from './containers/EeasyS1Container';
import EeasyS2Container from './containers/EeasyS2Container';
type Props = {};

const Eeasy = (props: Props) => {
	return (
		<div className='eeasy'>
			<EeasyS1Container />
			<EeasyS2Container />
		</div>
	);
};

export default Eeasy;
