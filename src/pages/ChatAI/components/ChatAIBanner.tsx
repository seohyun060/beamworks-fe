import React from 'react';
import images from 'src/assets/images';

type Props = {};

const ChatAIBanner = (props: Props) => {
	return (
		<div className='chatai-s1'>
			<img className='chatai-s1-img' src={images.chlogo_w} />
			<div className='chatai-s1-text'>디지털 의료정보의 한계를 초월하다.</div>
		</div>
	);
};

export default ChatAIBanner;
