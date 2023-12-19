import React, { useCallback, useEffect, useState } from 'react';
import ChatAIBanner from '../components/ChatAIBanner';
import useGnbStore from '@store/zustand/gnbZustand';
import { bannerTextsKo } from 'src/lang/ChatTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const ChatAIBannerContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [bannerTexts, setBannerTexts] = useState(bannerTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setBannerTexts(bannerTextsKo);
		} else {
			const data = await GoogleTranslate(bannerTextsKo, languageCode);

			setBannerTexts(data);
		}
	}, [bannerTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <ChatAIBanner bannerTexts={bannerTexts} />;
};

export default ChatAIBannerContainer;
