import React from 'react';
import images from 'src/assets/images';
import './styles/cadb.styles.css';
import CadBS1Coontainer from './containers/CadBS1Coontainer';
import CadBS2Container from './containers/CadBS2Container';
import CadBS3Container from './containers/CadBS3Container';
import CadBS4Container from './containers/CadBS4Container';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
type Props = {};

const CadB = (props: Props) => {
	return (
		<div className='cadb'>
			<CadBS1Coontainer />
			<CadBS2Container />
			<CadBS3Container />
			<CadBS4Container />
			<FooterContainer />
		</div>
	);
};

export default CadB;
