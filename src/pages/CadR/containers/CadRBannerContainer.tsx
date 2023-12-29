import React, { useCallback, useEffect, useState } from 'react';
import CadRBanner from '../components/CadRBanner';
import useGnbStore from '@store/zustand/gnbZustand';
import { bannerTextsKo } from 'src/lang/CadRTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
import useProductStore from '@store/zustand/productZustand';
type Props = {};

const CadRBannerContainer = (props: Props) => {
	const { languageCode } = useGnbStore();
	const [bannerTexts, setBannerTexts] = useState(bannerTextsKo);
	const { portrait, handleResize } = useProductStore();
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setBannerTexts(bannerTextsKo);
		} else {
			const data = await GoogleTranslate(bannerTextsKo, languageCode);

			setBannerTexts(data);
		}
	}, [bannerTexts, languageCode]);

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
	}, [window.innerWidth]);
	console.log(portrait);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <CadRBanner bannerTexts={bannerTexts} />;
};

export default CadRBannerContainer;
