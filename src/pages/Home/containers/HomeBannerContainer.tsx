import React, { useCallback, useEffect, useState } from 'react';
import HomeBanner from '../components/HomeBanner';
import { bannerTextsKo } from 'src/lang/HomeTexts';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const HomeBannerContainer = (props: Props) => {
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
	return <HomeBanner bannerTexts={bannerTexts} />;
};

export default HomeBannerContainer;
