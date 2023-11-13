import React from 'react';
import images from 'src/assets/images';
type Props = {};

const ChatAIS5 = (props: Props) => {
	return (
		<div className='chatai-s5'>
			<div className='chatai-s5-text'>
				<div className='s5-header'>
					<img className='s5-header-cross' src={images.ecross} />
					<img className='s5-header-pro' src={images.eeasy} />
				</div>
				<div className='s5-body'>
					일반인을 위한 응급 자가 분류 및 <br />
					응급 처치 안내 서비스 앱
				</div>
			</div>
			<img className='chatai-s5-image' src={images.chatai5} />
		</div>
	);
};

export default ChatAIS5;
