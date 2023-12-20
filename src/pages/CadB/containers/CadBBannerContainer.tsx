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
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setBannerTexts(bannerTextsKo);
		} else {
			const data = await GoogleTranslate(bannerTextsKo, languageCode);
			setBannerTexts(data);
		}
	}, [bannerTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return (
		<CadBBanner scrollPosition={scrollPosition} bannerTexts={bannerTexts} />
	);
};

export default CadBBannerContainer;
