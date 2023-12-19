import React, { useCallback, useEffect, useState } from 'react';
import CadIntro from '../components/CadIntro';
import useGnbStore from '@store/zustand/gnbZustand';
import { introTextsKo } from 'src/lang/CadTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const CadIntroContainer = (props: Props) => {
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
	console.log(introTexts);
	return <CadIntro introTexts={introTexts} />;
};

export default CadIntroContainer;
