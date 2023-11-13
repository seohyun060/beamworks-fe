import React from 'react';
import images from 'src/assets/images';
type Props = {};

const ChatAIS6 = (props: Props) => {
	return (
		<div className='chatai-s6'>
			<img className='s6-kiwi1' src={images.chatai6_1}></img>
			<img className='s6-kiwi2' src={images.chatai6_2}></img>
			<div className='chatai-s6-text'>
				<img className='s6-kiwi' src={images.kiwi} />
				<img className='s6-header' src={images.kiwilogo}></img>
				<div className='s6-body'>
					일반인을 위한 응급 자가 분류 및<br /> 응급 처치 안내 서비스 앱
				</div>
			</div>
		</div>
	);
};

export default ChatAIS6;
