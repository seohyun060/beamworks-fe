import React, { useCallback, useEffect, useState } from 'react';
import ChatAIKiwi from '../components/ChatAIKiwi';
import { kiwiTextsKo } from 'src/lang/ChatTexts';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const ChatAIKiwiContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [kiwiTexts, setKiwiTexts] = useState(kiwiTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setKiwiTexts(kiwiTextsKo);
		} else {
			const data = await GoogleTranslate(kiwiTextsKo, languageCode);
			setKiwiTexts(data);
		}
	}, [kiwiTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <ChatAIKiwi kiwiTexts={kiwiTexts} />;
};

export default ChatAIKiwiContainer;
