import React from 'react';
import images from 'src/assets/images';
import './styles/eeasy.styles.css';
import EeasyS1Container from './containers/EeasyS1Container';
import EeasyS2Container from './containers/EeasyS2Container';
import useProductStore from '@store/zustand/productZustand';
import ProductS5Container from 'src/pages/Product/containers/ProductS5Container';
import EeasyS3Container from './containers/EeasyS3Container';
import EeasyS4Container from './containers/EeasyS4Container';
import EeasyS5Container from './containers/EeasyS5Container';
import EeasyS6Container from './containers/EeasyS6Container';
type Props = {};

const Eeasy = (props: Props) => {
	const { eeasySolution } = useProductStore();
	return (
		<div className='eeasy'>
			<EeasyS1Container />
			<EeasyS2Container />
			<ProductS5Container solution={eeasySolution} />
			<EeasyS3Container />
			<EeasyS4Container />
			<EeasyS5Container />
			<EeasyS6Container />
		</div>
	);
};

export default Eeasy;
