import React, { useCallback, useEffect, useState } from 'react';
import Explore from '../components/Explore';
import { ExploreType } from '@typedef/types';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {
	exploreType: ExploreType;
};

const ExploreContainer = ({ exploreType }: Props) => {
	const { languageCode } = useGnbStore();
	const exploreTextsKo = [
		exploreType.title,
		exploreType.contents[0].text,
		exploreType.contents[1].text,
	];
	const [exploreTexts, setExploreTexts] = useState(exploreTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setExploreTexts(exploreTextsKo);
		} else {
			const data = await GoogleTranslate(exploreTextsKo, languageCode);
			setExploreTexts(data);
		}
	}, [exploreTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	console.log('dddd', exploreTexts);
	return <Explore exploreType={exploreType} exploreTexts={exploreTexts} />;
};

export default ExploreContainer;
