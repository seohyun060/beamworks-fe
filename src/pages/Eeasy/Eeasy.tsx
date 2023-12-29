import React from 'react';
import images from 'src/assets/images';
import './styles/eeasy.styles.css';
import EeasyBannerContainer from './containers/EeasyBannerContainer';
import EeasyHandContainer from './containers/EeasyHandContainer';
import useProductStore from '@store/zustand/productZustand';
import SolvingContainer from 'src/pages/Cad/containers/SolvingContainer';
import EeasyInfoContainer from './containers/EeasyInfoContainer';
import EeasyNervContainer from './containers/EeasyNervContainer';
import EeasyPainContainer from './containers/EeasyPainContainer';
import EeasyVideoContainer from './containers/EeasyVideoContainer';
import ExploreContainer from 'src/pages/Cad/containers/ExploreContainer';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import EeasyHandMobileContainer from './containers/EeasyHandMobileContainer';
type Props = {};

const Eeasy = (props: Props) => {
	const { eeasySolution, chataiExplore, setEeasySolution } = useProductStore();
	const { portrait } = useProductStore();
	return (
		<div className='eeasy'>
			<EeasyBannerContainer />
			<EeasyHandMobileContainer />
			<EeasyHandContainer />
			<SolvingContainer
				solution={eeasySolution}
				setSolution={setEeasySolution}
			/>
			<EeasyInfoContainer />
			<EeasyNervContainer />
			<EeasyPainContainer />
			<EeasyVideoContainer />
			<ExploreContainer exploreType={chataiExplore} />
			<FooterContainer />
		</div>
	);
};

export default Eeasy;
