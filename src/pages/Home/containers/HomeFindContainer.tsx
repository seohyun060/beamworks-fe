import React, { useCallback, useEffect, useState } from 'react';
import HomeFind from '../components/HomeFind';
import useGnbStore from '@store/zustand/gnbZustand';
import { findTextsKo } from 'src/lang/HomeTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';

type Props = {};

const HomeFindContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [findTexts, setFindTexts] = useState(findTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setFindTexts(findTextsKo);
		} else {
			const data = await GoogleTranslate(findTextsKo, languageCode);
			setFindTexts(data);
		}
	}, [findTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <HomeFind findTexts={findTexts} />;
};

export default HomeFindContainer;
