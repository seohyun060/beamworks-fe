import React, { useCallback, useEffect, useState } from 'react';
import AwardHistory from '../components/AwardHistory';
import { historyTextKo } from 'src/lang/AwardTexts';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const AwardHistoryContainer = (props: Props) => {
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
	const { languageCode } = useGnbStore();
	const [selectedHistory, setSelectedHistory] = useState();
	const [headerText, setHeaderText] = useState(historyTextKo[0]);
	const [text2021, setText2021] = useState(historyTextKo[1]);
	const [text2022, setText2022] = useState(historyTextKo[2]);
	const [text2023, setText2023] = useState(historyTextKo[3]);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setHeaderText(historyTextKo[0]);
			setText2021(historyTextKo[1]);
			setText2022(historyTextKo[2]);
			setText2023(historyTextKo[3]);
		} else {
			const dataHeader = await GoogleTranslate(historyTextKo[0], languageCode);
			const data2021 = await GoogleTranslate(historyTextKo[1], languageCode);
			const data2022 = await GoogleTranslate(historyTextKo[2], languageCode);
			const data2023 = await GoogleTranslate(historyTextKo[3], languageCode);

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
