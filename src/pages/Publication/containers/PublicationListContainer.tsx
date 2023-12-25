import React, { useEffect } from 'react';
import PublicationList from '../components/PublicationList';
import usePubPageStore from '@store/zustand/pubPageZustand';
import { PubInfo } from '@typedef/types';
type Props = {};

const pubs: PubInfo[] = [];
for (let i = 0; i < 3; i++) {
	pubs.push({
		title:
			'Real-time Decision Support by Light-weighted AI Model Trained with Large-scale Data by Light-weighted AI Model Trained with',
		author: 'Won Hwa Kim, Jaeil Kim',
		date: '2023.11.07',
	});
}
const PublicationListContainer = (props: Props) => {
	const { currentPage, totalPage, setTotalPage } = usePubPageStore();
	useEffect(() => {
		setTotalPage(18);

		return () => {};
	}, []);
	console.log(totalPage);
	return <PublicationList pubs={pubs} />;
};

export default PublicationListContainer;
