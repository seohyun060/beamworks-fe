import React, { useCallback, useEffect, useState } from 'react';
import HomeS3 from '../components/HomeS3';
import { MainNews } from '@typedef/types';
type Props = {};

const HomeS3Container = (props: Props) => {
	const [selectedTab, setSelectedTab] = useState('all');
	//const [tabs, setTabs] = useState(['all', 'cadai', 'chatai']);
	const newsList: MainNews[] = [];
	const [filteredList, setFilteredList] = useState<MainNews[]>([]);
	for (let i = 0; i < 4; i++) {
		const tempNews: MainNews = {
			content:
				'의료 AI(인공지능) 전문기업 빔웍스(대표 김원화·김재일)가 응급상황 어쩌고 저쩌고 어쩌고',
			date: new Date(),
			image: `/assets/images/mainNews${i + 1}.png`,
			title: '빔웍스, 위급상황서 중증환자를 효과적으로 어쩌고 저쩌고',
			type: i < 2 ? 'news' : 'research',
		};
		newsList.push(tempNews);
	}
	const tabs = [
		{
			type: 'all',
			text: 'All',
		},
		{
			type: 'news',
			text: '보도자료',
		},
		{
			type: 'research',
			text: '연구자료',
		},
	];
	const formatDate = (date: Date) => {
		const year = date.getFullYear().toString(); // 년도의 마지막 두 자리
		const month = date.getMonth() + 1; // 월을 문자열로 변환
		const day = date.getDate(); // 일
		return `${year}.${month}.${day}`;
	};
	const onTabClick = useCallback(
		(tab: string) => {
			setSelectedTab(tab);
		},
		[selectedTab],
	);
	useEffect(() => {
		switch (selectedTab) {
			case 'all':
				setFilteredList(newsList);
				break;
			case 'news':
				setFilteredList(newsList.filter((news) => news.type == 'news'));
				break;
			case 'research':
				setFilteredList(newsList.filter((news) => news.type == 'research'));
				console.log(selectedTab);
				break;
		}

		return () => {};
	}, [selectedTab]);
	console.log(formatDate(new Date()));
	console.log(filteredList);
	return (
		<HomeS3
			selectedTab={selectedTab}
			onTabClick={onTabClick}
			tabs={tabs}
			formatDate={formatDate}
			filteredList={filteredList}
		/>
	);
};

export default HomeS3Container;
