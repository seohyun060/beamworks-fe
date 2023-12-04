import React from 'react';
import images from 'src/assets/images';
type Props = {};

const ChatAIDown = (props: Props) => {
	return (
		<div className='chatai-s7'>
			<div className='chatai-s7-text'>
				<div className='s7-header'>
					어떠한 기기에서도 이용할 수 있도록, 모든 스토어에서 다운받을 수
					있습니다.
				</div>
				<div className='s7-body'>
					모든 사용자가 불편함 없이 서비스를 누릴 수 있어야 합니다.
					<br /> 앱 스토어, 구글 플레이 스토어에서 ChatAI-Series 를 만나보실 수
					있습니다.
				</div>
				<button className='s7-download'>앱 다운로드</button>
			</div>
			<div className='chatai-s7-image'>
				<img className='s7-app' src={images.gstore} />
				<img className='s7-app' src={images.astore}></img>
			</div>
		</div>
	);
};

export default ChatAIDown;
