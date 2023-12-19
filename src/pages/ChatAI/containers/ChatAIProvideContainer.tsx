import React, { useCallback, useEffect, useState } from 'react';
import ChatAIProvide from '../components/ChatAIProvide';
import useGnbStore from '@store/zustand/gnbZustand';
import { provideTextsKo } from 'src/lang/ChatTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const ChatAIProvideContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [provideTexts, setProvideTexts] = useState(provideTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setProvideTexts(provideTextsKo);
		} else {
			const data = await GoogleTranslate(provideTextsKo, languageCode);
			setProvideTexts(data);
		}
	}, [provideTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <ChatAIProvide provideTexts={provideTexts} />;
};

export default ChatAIProvideContainer;
