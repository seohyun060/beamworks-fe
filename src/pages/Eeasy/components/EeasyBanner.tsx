import React from 'react';
import images from 'src/assets/images';
type Props = {
	bannerTexts: string[];
};

const EeasyBanner = ({ bannerTexts }: Props) => {
	return (
		<div className='eeasy-s1'>
			<div className='eeasy-s1-text'>
				<img src={images.eeasyLogo} className='s1-header' />
				<div className='s1-body'>{bannerTexts[0]}</div>
			</div>
		</div>
	);
};

export default EeasyBanner;
