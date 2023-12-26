import React, { useState } from 'react';
import IDetail from '../IDetail';
import { useParams } from 'react-router-dom';
type Props = {};

const IDetailContainer = (props: Props) => {
	const params = useParams();
	const [insightDetail, setInsightDetail] = useState({
		title:
			'Real-time Decision Support by Light-weighted AI Model Trained with Large-scale Data by Light-weighted AI Model Trained with',
		type: 'White Paper',
		date: '23.00.00',
		link: 'https://raw.githubusercontent.com/seohyun060/beamworks-fe-pdf/main/190-1-3-4%20(1).pdf',
	});
	return <IDetail insightDetail={insightDetail} />;
};

export default IDetailContainer;
