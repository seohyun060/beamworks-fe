import React from 'react';
import CadBBanner from '../components/CadBBanner';
type Props = {
	scrollPosition: number;
};

const CadBBannerContainer = ({ scrollPosition }: Props) => {
	console.log(scrollPosition, 'dfdfdf');
	return <CadBBanner scrollPosition={scrollPosition} />;
};

export default CadBBannerContainer;
