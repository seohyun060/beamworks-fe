import React, { useState } from 'react';
import AwardS2 from '../components/AwardS2';
type Props = {};

const AwardS2Container = (props: Props) => {
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

	const histories = [
		{
			year: 2023,
			achieve: [],
		},
	];
	return <AwardS2 />;
};

export default AwardS2Container;
