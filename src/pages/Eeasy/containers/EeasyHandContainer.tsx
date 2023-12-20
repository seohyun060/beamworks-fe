import React, { useCallback, useEffect, useState } from 'react';
import EeasyHand from '../components/EeasyHand';
import useGnbStore from '@store/zustand/gnbZustand';
import { handTextsKo } from 'src/lang/EEasyTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';

type Props = {};

const EeasyHandContainer = (props: Props) => {
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	const [innerHeight, setInnerHeight] = useState(window.innerHeight);
	const handleResize = useCallback(() => {
		setInnerWidth(window.innerWidth);
		setInnerHeight(window.innerHeight);
	}, [window.innerWidth, innerWidth, window.innerHeight, innerHeight]);
	const { languageCode } = useGnbStore();
	const [handTexts, setHandTexts] = useState(handTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setHandTexts(handTextsKo);
		} else {
			const data = await GoogleTranslate(handTextsKo, languageCode);
			setHandTexts(data);
		}
	}, [handTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {};
	}, [window.innerWidth, window.innerHeight]);
	console.log(innerWidth);
	return (
		<EeasyHand
			innerWidth={innerWidth}
			innerHeight={innerHeight}
			handTexts={handTexts}
		/>
	);
};

export default EeasyHandContainer;
