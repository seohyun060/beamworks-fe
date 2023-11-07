import React, { useCallback, useEffect, useState } from 'react';
import Section2 from '../components/Section2';
type Props = {};

const Section2Container = (props: Props) => {
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
		<Section2 selectedTab={selectedTab} onTabClick={onTabClick} tabs={tabs} />
	);
};

export default Section2Container;
