import React, { useCallback, useEffect, useState } from 'react';
import EeasyBanner from '../components/EeasyBanner';
import { bannerTextsKo } from 'src/lang/EEasyTexts';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';

type Props = {};

const EeasyBannerContainer = (props: Props) => {
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
	return <EeasyBanner bannerTexts={bannerTexts} />;
};

export default EeasyBannerContainer;
