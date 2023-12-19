import React, { useCallback, useEffect, useState } from 'react';
import ChatAIIntro from '../components/ChatAIIntro';
import useGnbStore from '@store/zustand/gnbZustand';
import { introTextsKo } from 'src/lang/ChatTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const ChatAIIntroContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [introTexts, setIntroTexts] = useState(introTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setIntroTexts(introTextsKo);
		} else {
			const data = await GoogleTranslate(introTextsKo, languageCode);

			setIntroTexts(data);
		}
	}, [introTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <ChatAIIntro introTexts={introTexts} />;
};

export default ChatAIIntroContainer;
