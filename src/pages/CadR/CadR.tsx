import React from 'react';
import images from 'src/assets/images';
import CadRS1Container from './containers/CadRS1Container';
import CadRS3Container from './containers/CadRS3Container';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import './styles/cadr.styles.css';
import CadRS2Container from './containers/CadRS2Container';
import CadRS4Container from './containers/CadRS4Container';
import useCadrStore from '@store/zustand/cadrZustand';
import CadRS5Container from './containers/CadRS5Container';
import CadRS6Container from './containers/CadRS6Container';
type Props = {};

const CadR = (props: Props) => {
	const { community, contents, report } = useCadrStore();
	return (
		<div className='cadr'>
			<CadRS1Container />
			<CadRS2Container />
			<CadRS3Container />
			<CadRS4Container content={community} />
			<CadRS4Container content={contents} />
			<CadRS4Container content={report} />
			<CadRS5Container />
			<CadRS6Container />
			<FooterContainer />
		</div>
	);
};

export default CadR;
