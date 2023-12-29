import useProductStore from '@store/zustand/productZustand';
import React from 'react';
import images from 'src/assets/images';

type Props = {
	bannerTexts: string[];
};

const CadRBanner = ({ bannerTexts }: Props) => {
	const { portrait } = useProductStore();

	return (
		<div className='cadr-s1'>
			<button className='cadr-s1-button'>{bannerTexts[0]}</button>
			<div className='cadr-s1-text'>
				<img
					src={portrait ? images.cadrLogo_m : images.cadrLogo_b}
					className='s1-header'
				/>
				<div className='s1-body'>{bannerTexts[1]}</div>
			</div>
		</div>
	);
};

export default CadRBanner;
