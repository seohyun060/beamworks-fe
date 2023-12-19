import React, { useCallback, useEffect, useState } from 'react';
import CadRC from '../components/CadRC';
import useGnbStore from '@store/zustand/gnbZustand';
import { rcTextKo } from 'src/lang/CadTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const CadRCContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [rcTexts, setRcTexts] = useState(rcTextKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setRcTexts(rcTextKo);
		} else {
			const data = await GoogleTranslate(rcTextKo, languageCode);
			setRcTexts(data);
		}
	}, [rcTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	//console.log(rcTexts);
	return <CadRC rcTexts={rcTexts} />;
};

export default CadRCContainer;
