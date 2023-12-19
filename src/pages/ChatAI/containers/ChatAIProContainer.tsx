import React, { useCallback, useEffect, useState } from 'react';
import ChatAIPro from '../components/ChatAIPro';
import { eProTextsKo } from 'src/lang/ChatTexts';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const ChatAIProContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [eProTexts, setEProTexts] = useState(eProTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setEProTexts(eProTextsKo);
		} else {
			const data = await GoogleTranslate(eProTextsKo, languageCode);
			setEProTexts(data);
		}
	}, [eProTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <ChatAIPro eProTexts={eProTexts} />;
};

export default ChatAIProContainer;
