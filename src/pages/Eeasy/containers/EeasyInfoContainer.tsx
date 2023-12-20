import React, { useCallback, useEffect, useState } from 'react';
import EeasyInfo from '../components/EeasyInfo';
import { infoTextsKo } from 'src/lang/EEasyTexts';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';

type Props = {};

const EeasyInfoContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [infoTexts, setInfoTexts] = useState(infoTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setInfoTexts(infoTextsKo);
		} else {
			const data = await GoogleTranslate(infoTextsKo, languageCode);
			setInfoTexts(data);
		}
	}, [infoTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <EeasyInfo infoTexts={infoTexts} />;
};

export default EeasyInfoContainer;
