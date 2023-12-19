import React, { useCallback, useEffect, useState } from 'react';
import AwardHistory from '../components/AwardHistory';
import { historyTextsKo } from 'src/lang/AwardTexts';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const AwardHistoryContainer = (props: Props) => {
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
	const { languageCode } = useGnbStore();
	const [selectedHistory, setSelectedHistory] = useState();
	const [headerText, setHeaderText] = useState(historyTextsKo.header);
	const [text2021, setText2021] = useState(historyTextsKo.history21);
	const [text2022, setText2022] = useState(historyTextsKo.history22);
	const [text2023, setText2023] = useState(historyTextsKo.history23);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setHeaderText(historyTextsKo.header);
			setText2021(historyTextsKo.history21);
			setText2022(historyTextsKo.history22);
			setText2023(historyTextsKo.history23);
		} else {
			const dataHeader = await GoogleTranslate(
				historyTextsKo.header,
				languageCode,
			);
			const data2021 = await GoogleTranslate(
				historyTextsKo.history21,
				languageCode,
			);
			const data2022 = await GoogleTranslate(
				historyTextsKo.history22,
				languageCode,
			);
			const data2023 = await GoogleTranslate(
				historyTextsKo.history23,
				languageCode,
			);

			setHeaderText(dataHeader);
			setText2021(data2021);
			setText2022(data2022);
			setText2023(data2023);
		}
	}, [headerText, text2021, text2022, , text2023, languageCode]);
	const onYearClick = useCallback(
		(year: number) => {
			setSelectedYear(year);
		},
		[selectedYear],
	);

	const histories = [
		{
			year: 2023,
			achieve: text2023,
		},
		{
			year: 2022,
			achieve: text2022,
		},
		{
			year: 2021,
			achieve: text2021,
		},
	];
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return (
		<AwardHistory
			selectedYear={selectedYear}
			histories={histories}
			onYearClick={onYearClick}
			headerText={headerText}
		/>
	);
};

export default AwardHistoryContainer;
