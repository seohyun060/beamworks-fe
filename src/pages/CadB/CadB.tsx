import React from 'react';
import images from 'src/assets/images';
import './styles/cadb.styles.css';
import { CadbMode } from '@typedef/types';
import CadBBannerContainer from './containers/CadBBannerContainer';
import CadBIntroContainer from './containers/CadBIntroContainer';
import CadBModesContainer from './containers/CadBModesContainer';
import CadBModeInfoContainer from './containers/CadBModeInfoContainer';
import useCadbStore from '@store/zustand/cadbZustand';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import ExploreContainer from 'src/pages/Cad/containers/ExploreContainer';
import useProductStore from '@store/zustand/productZustand';
type Props = {
	pageRef: any;
	scrollPosition: number;
};

const CadB = ({ pageRef, scrollPosition }: Props) => {
	const { rmode, mmode, fmode, smode, rvmode } = useCadbStore();
	const { cadbExplore } = useProductStore();
	return (
		<div className='cadb' ref={pageRef}>
			<CadBBannerContainer scrollPosition={scrollPosition} />
			<CadBIntroContainer />
			<CadBModesContainer />
			<CadBModeInfoContainer modeType={rmode} />
			<CadBModeInfoContainer modeType={fmode} />
			<CadBModeInfoContainer modeType={mmode} />
			<CadBModeInfoContainer modeType={rvmode} />
			<CadBModeInfoContainer modeType={smode} />
			<ExploreContainer exploreType={cadbExplore} />
			<FooterContainer />
		</div>
	);
};

export default CadB;
