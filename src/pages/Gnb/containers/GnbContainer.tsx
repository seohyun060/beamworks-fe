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
	const { company, product, tabs1, tabs2, news, visit } =
		useGnbStore() as GnbStore;
	const tab1List = [company, news, product, visit];
	const [globeToggle, setGlobeToggle] = useState(false);
	const languages = [
		{
			text: '한국어',
			code: 'ko',
		},
		{
			text: 'English',
			code: 'en',
		},
		{
			text: 'ру́сский язы́к',
			code: 'ru',
		},
		{
			text: '日本語',
			code: 'ja',
		},
		{
			text: '中文',
			code: 'zh',
		},
		{
			text: 'Español',
			code: 'es',
		},
		{
			text: 'Deutsch',
			code: 'de',
		},
		{
			text: 'Français',
			code: 'fr',
		},
		{
			text: 'हिन्दी',
			code: 'hi',
		},
	];

	const navigate = useNavigate();

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
	const onGlobeClicked = useCallback(() => {
		setGlobeToggle((prev) => !prev);
	}, [globeToggle]);

	return (
		<Gnb
			tabs1={tabs1}
			tabs2={tabs2}
			onTabEnter={onTabEnter}
			onTabLeave={onTabLeave}
			tabHovered={tabHovered}
			onPathClick={onPathClick}
			tab1List={tab1List}
			globeToggle={globeToggle}
			onGlobeClicked={onGlobeClicked}
			languages={languages}
		/>
	);
};

export default GnbContainer;
