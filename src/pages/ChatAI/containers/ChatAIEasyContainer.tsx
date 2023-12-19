import React, { useCallback, useEffect, useState } from 'react';
import ChatAIEasy from '../components/ChatAIEasy';
import { eEasyTextssKo } from 'src/lang/ChatTexts';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const ChatAIEasyContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [eEasyTexts, setEEasyTexts] = useState(eEasyTextssKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setEEasyTexts(eEasyTextssKo);
		} else {
			const data = await GoogleTranslate(eEasyTextssKo, languageCode);
			setEEasyTexts(data);
		}
	}, [eEasyTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <ChatAIEasy eEasyTexts={eEasyTexts} />;
};

export default ChatAIEasyContainer;
