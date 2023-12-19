import React, { useCallback, useEffect, useState } from 'react';
import CadHelp from '../components/CadHelp';
import useGnbStore from '@store/zustand/gnbZustand';
import { helpTextsKo } from 'src/lang/CadTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const CadHelpConainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [helpTexts, setHelpTexts] = useState(helpTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setHelpTexts(helpTextsKo);
		} else {
			const data = await GoogleTranslate(helpTextsKo, languageCode);
			setHelpTexts(data);
		}
	}, [helpTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <CadHelp helpTexts={helpTexts} />;
};

export default CadHelpConainer;
