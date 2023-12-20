import React, { useCallback, useEffect, useState } from 'react';
import CadRHome from '../components/CadRHome';
import useGnbStore from '@store/zustand/gnbZustand';
import { homeTextsKo } from 'src/lang/CadRTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const CadRHomeContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [homeTexts, setHomeTexts] = useState(homeTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setHomeTexts(homeTextsKo);
		} else {
			const data = await GoogleTranslate(homeTextsKo, languageCode);
			setHomeTexts(data);
		}
	}, [homeTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <CadRHome homeTexts={homeTexts} />;
};

export default CadRHomeContainer;
