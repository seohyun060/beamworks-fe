import React, { useCallback, useEffect, useState } from 'react';
import CadAble from '../components/CadAble';
import useGnbStore from '@store/zustand/gnbZustand';
import { ableTextsKo } from 'src/lang/CadTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const CadAbleContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [ableTexts, setAbleTexts] = useState(ableTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setAbleTexts(ableTextsKo);
		} else {
			const data = await GoogleTranslate(ableTextsKo, languageCode);
			setAbleTexts(data);
		}
	}, [ableTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <CadAble ableTexts={ableTexts} />;
};

export default CadAbleContainer;
