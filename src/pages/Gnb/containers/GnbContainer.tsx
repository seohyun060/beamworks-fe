import React, { useCallback, useState } from 'react';
import Gnb from '../Gnb';
import useCadbStore from '@store/zustand/cadbZustand';
import { useNavigate } from 'react-router-dom';
import { GnbStore } from '@store/zustand/gnbZustand';
import useGnbStore from '@store/zustand/gnbZustand';
type Props = {
	location: string;
};

const GnbContainer = ({ location }: Props) => {
	const { company, product, community, tabs1, tabs2 } =
		useGnbStore() as GnbStore;
	const tab1List = [company, product, community];
	const navigate = useNavigate();
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
			if (!tabHovered.includes(true)) {
				const updatedList = [...tabHovered];
				updatedList[index] = true;
				setTabHovered(updatedList);
			}
		},
		[tabHovered],
	);
	const onTabLeave = useCallback(
		(index: number) => {
			const updatedList = [...tabHovered];
			updatedList[index] = false;
			setTabHovered(updatedList);
		},
		[tabHovered],
	);
	const onPathClick = useCallback((label: string, path: string) => {
		if (label === 'ORCA 바로가기') {
			window.location.href = path;
		} else {
			navigate(path);
		}
	}, []);

	return (
		<Gnb
			tabs={tabs}
			tabs1={tabs1}
			tabs2={tabs2}
			onTabEnter={onTabEnter}
			onTabLeave={onTabLeave}
			tabHovered={tabHovered}
			onPathClick={onPathClick}
			tab1List={tab1List}
		/>
	);
};

export default GnbContainer;
