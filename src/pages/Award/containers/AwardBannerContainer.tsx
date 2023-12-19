import React, { useCallback, useEffect, useState } from 'react';
import AwardBanner from '../components/AwardBanner';
import GoogleTranslate from 'src/lang/GoogleTranslate';
import useGnbStore from '@store/zustand/gnbZustand';
import { bannerTextsKo, bannerTextsEn } from 'src/lang/AwardTexts';
type Props = {};

const AwardBannerContainer = (props: Props) => {
	let data: string[] = [];
	const { languageCode } = useGnbStore();
	const [texts, setTexts] = useState(bannerTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setTexts(bannerTextsKo);
		} else if (languageCode === 'en') {
			//setTexts(bannerTextEn);   영문 번역 추가되면 이거 사용
			data = await GoogleTranslate(bannerTextsKo, languageCode); // 임시
			console.log(typeof data[0]);
			setTexts(data);
		} else {
			// data = await GoogleTranslate(bannerTextEn, languageCode);  영문 번역 추가되면 이거 사용
			// console.log(typeof data[0]);
			// setTexts(data);
			data = await GoogleTranslate(bannerTextsKo, languageCode); // 임시
			console.log(typeof data[0]);
			setTexts(data);
		}
	}, [texts, languageCode]);
	console.log(texts);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);

	return <AwardBanner texts={texts} />;
};

export default AwardBannerContainer;
