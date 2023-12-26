import React, { useCallback, useEffect } from 'react';
import useWhitePageStore from '@store/zustand/whitePageZustand';
import { PubInfo } from '@typedef/types';
import WhiteList from '../components/WhiteList';
import { useNavigate } from 'react-router-dom';
type Props = {};

const whites: PubInfo[] = [];
for (let i = 0; i < 3; i++) {
	whites.push({
		id: i + 10,
		type: 'White Paper',
		title:
			'Real-time Decision Support by Light-weighted AI Model Trained with Large-scale Data by Light-weighted AI Model Trained with',
		author: 'Won Hwa Kim, Jaeil Kim',
		date: '2023.11.07',
	});
}
const WhiteListContainer = (props: Props) => {
	const { currentPage, totalPage, setTotalPage } = useWhitePageStore();
	const navigate = useNavigate();
	const onInsightClick = useCallback(
		(id: number) => {
			navigate(`/idetail/${id}`);
			window.scrollTo(0, 0);
		},
		[navigate],
	);
	useEffect(() => {
		setTotalPage(18);

		return () => {};
	}, []);
	console.log(totalPage);
	return <WhiteList whites={whites} onInsightClick={onInsightClick} />;
};

export default WhiteListContainer;
