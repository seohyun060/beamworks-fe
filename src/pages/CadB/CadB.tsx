import React from 'react';
import images from 'src/assets/images';
import './styles/cadb.styles.css';
import { CadbMode } from '@typedef/types';
import CadBS1Coontainer from './containers/CadBS1Coontainer';
import CadBS2Container from './containers/CadBS2Container';
import CadBS3Container from './containers/CadBS3Container';
import CadBS4Container from './containers/CadBS4Container';
import useCadbStore from '@store/zustand/cadbZustand';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import ProductS8Container from 'src/pages/Product/containers/ProductS8Container';
import useProductStore from '@store/zustand/productZustand';
type Props = {
	pageRef: any;
	scrollPosition: number;
};

const CadB = ({ pageRef, scrollPosition }: Props) => {
	const { rmode, mmode, fmode, smode } = useCadbStore();
	const { cadbExplore } = useProductStore();
	return (
		<div className='cadb' ref={pageRef}>
			<CadBS1Coontainer scrollPosition={scrollPosition} />
			<CadBS2Container />
			<CadBS3Container />
			<CadBS4Container modeType={rmode} />
			<CadBS4Container modeType={fmode} />
			<CadBS4Container modeType={mmode} />
			<CadBS4Container modeType={smode} />
			<ProductS8Container exploreType={cadbExplore} />
			<FooterContainer />
		</div>
	);
};

export default CadB;
