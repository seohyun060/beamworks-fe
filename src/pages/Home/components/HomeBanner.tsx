import React from 'react';
import images from 'src/assets/images';
type Props = {
	bannerTexts: string[];
};

const HomeBanner = ({ bannerTexts }: Props) => {
	return (
		<div className='home-s1'>
			<div className='home-s1-text'>
				{bannerTexts[0].split('\n').map((text, i) => (
					<p key={i}>{text}</p>
				))}
			</div>
		</div>
	);
};

export default HomeBanner;
