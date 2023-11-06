import React, { useCallback, useState } from 'react';
import Gnb from '../Gnb';
type Props = {
	location: string;
};

const GnbContainer = ({ location }: Props) => {
	const tabs = [
		'회사소개',
		'제품소개',
		'커뮤니티',
		'제품 구입/다운',
		'문의하기',
		'채용',
	];

	const [tabHovered, setTabHovered] = useState(Array(6).fill(false));
	const onTabEnter = useCallback(
		(index: number) => {
			const updatedList = [...tabHovered];
			updatedList[index] = true;
			setTabHovered(updatedList);
			console.log(index, 'enter');
		},
		[tabHovered],
	);
	const onTabLeave = useCallback(
		(index: number) => {
			const updatedList = [...tabHovered];
			updatedList[index] = false;
			setTabHovered(updatedList);
			console.log(index, 'leave');
		},
		[tabHovered],
	);
	return (
		<Gnb
			tabs={tabs}
			onTabEnter={onTabEnter}
			onTabLeave={onTabLeave}
			tabHovered={tabHovered}
		/>
	);
};

export default GnbContainer;
