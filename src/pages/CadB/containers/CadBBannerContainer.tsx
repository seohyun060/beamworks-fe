import React, { useCallback, useEffect, useState } from 'react';
import CadBBanner from '../components/CadBBanner';
import useGnbStore from '@store/zustand/gnbZustand';
import { bannerTextsKo } from 'src/lang/CadBTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {
	scrollPosition: number;
};

const CadBBannerContainer = ({ scrollPosition }: Props) => {
	console.log(scrollPosition, 'dfdfdf');
	const { languageCode } = useGnbStore();
	const [bannerTexts, setBannerTexts] = useState(bannerTextsKo);
	const [portrait, setPortrait] = useState(false);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setBannerTexts(bannerTextsKo);
		} else {
			const data = await GoogleTranslate(bannerTextsKo, languageCode);
			setBannerTexts(data);
		}
	}, [bannerTexts, languageCode]);
	const handleResize = useCallback(() => {
		if (window.innerWidth > window.innerHeight) {
			setPortrait(false);
		} else {
			setPortrait(true);
		}
	}, [window.innerWidth, window.innerHeight, portrait]);

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
	}, [window.innerWidth]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	console.log(portrait);
	return (
		<CadBBanner
			scrollPosition={scrollPosition}
			bannerTexts={bannerTexts}
			portrait={portrait}
		/>
	);
};

export default CadBBannerContainer;
