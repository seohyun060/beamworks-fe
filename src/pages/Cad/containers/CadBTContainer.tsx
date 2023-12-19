import React, { useCallback, useEffect, useState } from 'react';
import CadBT from '../components/CadBT';
import useGnbStore from '@store/zustand/gnbZustand';
import { btTextsKo } from 'src/lang/CadTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const CadBTContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [btTexts, setBtTexts] = useState(btTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setBtTexts(btTextsKo);
		} else {
			const data = await GoogleTranslate(btTextsKo, languageCode);

			setBtTexts(data);
		}
	}, [btTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	console.log(btTexts);
	return <CadBT btTexts={btTexts} />;
};

export default CadBTContainer;
