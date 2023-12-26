import React from 'react';
import PDateList from '../components/PDateList';

type Props = {};
const pDates: any = [];
for (let i = 0; i < 9; i++) {
	pDates.push({
		date: '2023.12.29',
		title: 'CadAI-B 1.4v 업데이트',
	});
}
const PDateListContainer = (props: Props) => {
	return <PDateList pDates={pDates} />;
};

export default PDateListContainer;
