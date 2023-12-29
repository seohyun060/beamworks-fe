import React from 'react';
import images from 'src/assets/images';
import CadRBannerContainer from './containers/CadRBannerContainer';
import CadRHomeContainer from './containers/CadRHomeContainer';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import './styles/cadr.styles.css';
import CadRWriteContainer from './containers/CadRWriteContainer';
import CadRSpaceContainer from './containers/CadRSpaceContainer';
import useCadrStore from '@store/zustand/cadrZustand';
import CadRShareContainer from './containers/CadRShareContainer';
import CadRPlaceContainer from './containers/CadRPlaceContainer';
import ExploreContainer from 'src/pages/Cad/containers/ExploreContainer';
import useProductStore from '@store/zustand/productZustand';
type Props = {};

const CadR = (props: Props) => {
	const { community, contents, report } = useCadrStore();
	const { cadsExplore } = useProductStore();
	return (
		<div className='cadr'>
			<CadRBannerContainer />
			<CadRWriteContainer />
			<CadRHomeContainer />
			<CadRSpaceContainer content={community} />
			<CadRSpaceContainer content={contents} />
			<CadRSpaceContainer content={report} />
			<CadRShareContainer />
			<CadRPlaceContainer />
			<ExploreContainer exploreType={cadsExplore} />
			<FooterContainer />
		</div>
	);
};

export default CadR;
