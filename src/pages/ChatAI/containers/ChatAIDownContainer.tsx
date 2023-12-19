import React, { useCallback, useEffect, useState } from 'react';
import ChatAIDown from '../components/ChatAIDown';
import useGnbStore from '@store/zustand/gnbZustand';
import { downTextsKo } from 'src/lang/ChatTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const ChatAIDownContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [downTexts, setDownTexts] = useState(downTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setDownTexts(downTextsKo);
		} else {
			const data = await GoogleTranslate(downTextsKo, languageCode);
			setDownTexts(data);
		}
	}, [downTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <ChatAIDown downTexts={downTexts} />;
};

export default ChatAIDownContainer;
