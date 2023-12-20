import React, { useCallback, useEffect, useState } from 'react';
import CadBIntro from '../components/CadBIntro';
import useGnbStore from '@store/zustand/gnbZustand';
import { introTextsKo } from 'src/lang/CadBTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const CadBIntroContainer = (props: Props) => {
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
	return <CadBIntro introTexts={introTexts} />;
};

export default CadBIntroContainer;
