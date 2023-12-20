import React, { useCallback, useEffect, useState } from 'react';
import CadRWrite from '../components/CadRWrite';
import useGnbStore from '@store/zustand/gnbZustand';
import { writeTextsKo } from 'src/lang/CadRTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const CadRWriteContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [writeTexts, setWriteTexts] = useState(writeTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setWriteTexts(writeTextsKo);
		} else {
			const data = await GoogleTranslate(writeTextsKo, languageCode);
			setWriteTexts(data);
		}
	}, [writeTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <CadRWrite writeTexts={writeTexts} />;
};

export default CadRWriteContainer;
