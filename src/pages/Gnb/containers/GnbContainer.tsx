import React, { useCallback, useState } from 'react';
import Gnb from '../Gnb';
import useCadbStore from '@store/zustand/cadbZustand';
import { useNavigate } from 'react-router-dom';
type Props = {
	location: string;
};

const GnbContainer = ({ location }: Props) => {
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
			onTabEnter={onTabEnter}
			onTabLeave={onTabLeave}
			tabHovered={tabHovered}
			onPathClick={onPathClick}
		/>
	);
};

export default GnbContainer;
