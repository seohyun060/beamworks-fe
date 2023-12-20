import React, { useCallback, useEffect, useState } from 'react';
import HomeTech from '../components/HomeTech';
import { techTextsKo } from 'src/lang/HomeTexts';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {};

const HomeTechContainer = (props: Props) => {
	const [selectedTab, setSelectedTab] = useState('all');
	//const [tabs, setTabs] = useState(['all', 'cadai', 'chatai']);
	const tabs = [
		{
			type: 'all',
			text: 'All',
		},
		{
			type: 'cadai',
			text: 'CadAI Series',
		},
		{
			type: 'chatai',
			text: 'ChatAI Series',
		},
	];
	const onTabClick = useCallback(
		(tab: string) => {
			setSelectedTab(tab);
		},
		[selectedTab],
	);
	const { languageCode } = useGnbStore();
	const [techTexts, setTechTexts] = useState(techTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setTechTexts(techTextsKo);
		} else {
			const data = await GoogleTranslate(techTextsKo, languageCode);
			setTechTexts(data);
		}
	}, [techTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return (
		<HomeTech
			selectedTab={selectedTab}
			onTabClick={onTabClick}
			tabs={tabs}
			techTexts={techTexts}
		/>
	);
};

export default HomeTechContainer;
