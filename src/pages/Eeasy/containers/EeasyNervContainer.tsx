import React, { useCallback, useEffect, useState } from 'react';
import EeasyNerv from '../components/EeasyNerv';
import { nervTextsKo } from 'src/lang/EEasyTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
import useGnbStore from '@store/zustand/gnbZustand';

type Props = {};

const EeasyNervContainer = (props: Props) => {
	const [toggle, setToggle] = useState(false);
	const { languageCode } = useGnbStore();
	const [nervTexts, setNervTexts] = useState(nervTextsKo);

	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setNervTexts(nervTextsKo);
		} else {
			const data = await GoogleTranslate(nervTextsKo, languageCode);
			setNervTexts(data);
		}
	}, [nervTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	const onToggleClick = useCallback(() => {
		setToggle(true);
	}, [toggle, nervTexts]);

	return (
		<EeasyNerv
			toggle={toggle}
			onToggleClick={onToggleClick}
			nervTexts={nervTexts}
		/>
	);
};

export default EeasyNervContainer;
