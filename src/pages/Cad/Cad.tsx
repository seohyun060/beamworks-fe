import React from 'react';
import CadBannerContainer from './containers/CadBannerContainer';
import CadIntroContainer from './containers/CadIntroContainer';
import CadHelpConainer from './containers/CadHelpContainer';
import CadAbleContainer from './containers/CadAbleContainer';
import SolvingContainer from './containers/SolvingContainer';
import CadBTContainer from './containers/CadBTContainer';
import CadRCContainer from './containers/CadRCContainer';
import ExploreContainer from './containers/ExploreContainer';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import './styles/cad.styles.css';
import useProductStore from '@store/zustand/productZustand';
type Props = {};

const Cad = (props: Props) => {
	const { cadsExplore, cadaiSolution } = useProductStore();
	return (
		<div className='product'>
			<CadBannerContainer />
			<SolvingContainer solution={cadaiSolution} />
			<CadIntroContainer />
			<CadBTContainer />
			<CadHelpConainer />
			<CadAbleContainer />

			<CadRCContainer />
			<ExploreContainer exploreType={cadsExplore} />
			<FooterContainer />
		</div>
	);
};

export default Cad;
