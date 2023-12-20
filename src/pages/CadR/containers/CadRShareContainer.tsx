import React, { useCallback, useEffect, useState } from 'react';
import CadRShare from '../components/CadRShare';
import useGnbStore from '@store/zustand/gnbZustand';
import { shareTextsKo } from 'src/lang/CadRTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';

type Props = {};

const CadRShareContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [shareTexts, setShareTexts] = useState(shareTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setShareTexts(shareTextsKo);
		} else {
			const data = await GoogleTranslate(shareTextsKo, languageCode);
			setShareTexts(data);
		}
	}, [shareTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <CadRShare shareTexts={shareTexts} />;
};

export default CadRShareContainer;
