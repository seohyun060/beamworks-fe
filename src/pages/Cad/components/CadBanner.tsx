import React from 'react';
import images from 'src/assets/images';

type Props = {
	bannerTexts: string[];
};

const CadBanner = ({ bannerTexts }: Props) => {
	return (
		<div className='product-s1'>
			<div className='product-s1-img'>Vision AI</div>
			<div className='product-s1-text'>{bannerTexts[0]}</div>
		</div>
	);
};

export default CadBanner;
