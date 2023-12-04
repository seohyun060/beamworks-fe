import React, { useCallback, useEffect, useState } from 'react';
import HomeTech from '../components/HomeTech';
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

	return (
		<HomeTech selectedTab={selectedTab} onTabClick={onTabClick} tabs={tabs} />
	);
};

export default HomeTechContainer;
