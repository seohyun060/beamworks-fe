import React, { useCallback, useEffect } from 'react';
import PublicationList from '../components/PublicationList';
import usePubPageStore from '@store/zustand/pubPageZustand';
import { PubInfo } from '@typedef/types';
import { useNavigate } from 'react-router-dom';
type Props = {};

const pubs: PubInfo[] = [];
for (let i = 0; i < 3; i++) {
	pubs.push({
		id: i,
		type: '연구 / 논문',
		title:
			'Real-time Decision Support by Light-weighted AI Model Trained with Large-scale Data by Light-weighted AI Model Trained with',
		author: 'Won Hwa Kim, Jaeil Kim',
		date: '2023.11.07',
	});
}
const PublicationListContainer = (props: Props) => {
	const { currentPage, totalPage, setTotalPage } = usePubPageStore();
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
	return <PublicationList pubs={pubs} onInsightClick={onInsightClick} />;
};

export default PublicationListContainer;
