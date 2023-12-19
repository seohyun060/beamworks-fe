import React, { useCallback, useEffect, useState } from 'react';
import CadBanner from '../components/CadBanner';
import { bannerTextsKo } from 'src/lang/CadTexts';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';

type Props = {};

const CadBannerContainer = (props: Props) => {
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
	console.log(bannerTexts);
	return <CadBanner bannerTexts={bannerTexts} />;
};

export default CadBannerContainer;
