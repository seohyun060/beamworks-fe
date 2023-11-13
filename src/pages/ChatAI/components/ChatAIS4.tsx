import React from 'react';
import images from 'src/assets/images';
type Props = {};

const ChatAIS4 = (props: Props) => {
	return (
		<div className='chatai-s4'>
			<div className='chatai-s4-text'>
				<div className='s4-header'>
					<img className='s4-header-cross' src={images.ecross} />
					<img className='s4-header-pro' src={images.epro} />
				</div>
				<div className='s4-body'>
					응급 의료진을 위한
					<br /> 한국형 응급환자 분류 서비스 앱
				</div>
			</div>
			<img className='chatai-s4-image' src={images.chatai4} />
		</div>
	);
};

export default ChatAIS4;
