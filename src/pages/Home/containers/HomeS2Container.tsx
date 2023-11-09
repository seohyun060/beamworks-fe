import React, { useCallback, useEffect, useState } from 'react';
import HomeS2 from '../components/HomeS2';
type Props = {};

const HomeS2Container = (props: Props) => {
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
		<HomeS2 selectedTab={selectedTab} onTabClick={onTabClick} tabs={tabs} />
	);
};

export default HomeS2Container;
