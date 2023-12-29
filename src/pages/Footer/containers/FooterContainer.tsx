import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';
import useGnbStore from '@store/zustand/gnbZustand';
import { infoTextsKo } from 'src/lang/FooterTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const FooterContainer = (props: Props) => {
	const location = useLocation();
	console.log(location.pathname);
	const [type, setType] = useState('');
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
	useEffect(() => {
		if (location.pathname === '/cadb') {
			setType('black');
		} else {
			setType('');
		}
		return () => {};
	}, [location]);

	return <Footer type={type} infoTexts={infoTexts} />;
};

export default FooterContainer;
