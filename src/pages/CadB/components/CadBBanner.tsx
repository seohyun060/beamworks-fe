import React from 'react';
import images from 'src/assets/images';
type Props = {
	scrollPosition: number;
	bannerTexts: string[];
	portrait: boolean;
};

const CadBBanner = ({ scrollPosition, bannerTexts, portrait }: Props) => {
	console.log(scrollPosition);
	return (
		<div className='cadb-s1'>
			<div className='cadb-s1-button'>
				<span
					className='s1-demo'
					style={{
						color: scrollPosition == 1 || scrollPosition == 2 ? '#000' : '#fff',
					}}
				>
					{bannerTexts[0]}
				</span>
				<button className='s1-buy'>{bannerTexts[1]}</button>
			</div>
			<div className='cadb-s1-text'>
				<img src={images.cadb_w} className='s1-header' />
				<div className='s1-body'>{bannerTexts[2]}</div>
			</div>
		</div>
	);
};

export default CadBBanner;
