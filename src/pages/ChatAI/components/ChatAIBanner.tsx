import React from 'react';
import images from 'src/assets/images';

type Props = {
	bannerTexts: string[];
};

const ChatAIBanner = ({ bannerTexts }: Props) => {
	return (
		<div className='chatai-s1'>
			<img className='chatai-s1-img' src={images.chlogo_w} />
			<div className='chatai-s1-text'>{bannerTexts[0]}</div>
		</div>
	);
};

export default ChatAIBanner;
