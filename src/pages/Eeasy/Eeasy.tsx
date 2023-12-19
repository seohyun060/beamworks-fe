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
import ChatAIDownContainer from '@components/ChatAI/containers/ChatAIDownContainer';
import ExploreContainer from 'src/pages/Cad/containers/ExploreContainer';
type Props = {};

const Eeasy = (props: Props) => {
	const { eeasySolution, chataiExplore, setEeasySolution } = useProductStore();
	return (
		<div className='eeasy'>
			<EeasyBannerContainer />
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
		</div>
	);
};

export default Eeasy;
