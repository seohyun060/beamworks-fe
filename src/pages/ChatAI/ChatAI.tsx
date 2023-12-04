import React from 'react';
import './styles/chatai.styles.css';
import ChatAIBannerContainer from './containers/ChatAIBannerContainer';
import ChatAIIntroContainer from './containers/ChatAIIntroContainer';
import ChatAIProvideContainer from './containers/ChatAIProvideContainer';
import ChatAIProContainer from './containers/ChatAIProContainer';
import ChatAIEasyContainer from './containers/ChatAIEasyContainer';
import ChatAIKiwiContainer from './containers/ChatAIKiwiContainer';
import ChatAIDownContainer from './containers/ChatAIDownContainer';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import ExploreContainer from 'src/pages/Cad/containers/ExploreContainer';
import useProductStore from '@store/zustand/productZustand';
type Props = {};

const ChatAI = (props: Props) => {
	const { chataiExplore } = useProductStore();
	return (
		<div className='chatai'>
			<ChatAIBannerContainer />
			<ChatAIIntroContainer />
			<ChatAIProvideContainer />
			<ChatAIProContainer />
			<ChatAIEasyContainer />
			<ChatAIKiwiContainer />
			<ChatAIDownContainer />
			<ExploreContainer exploreType={chataiExplore} />
			<FooterContainer />
		</div>
	);
};

export default ChatAI;
