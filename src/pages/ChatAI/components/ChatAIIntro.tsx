import React from 'react';
import images from 'src/assets/images';
type Props = {};

const ChatAIIntro = (props: Props) => {
	return (
		<div className='chatai-s2'>
			<div className='chatai-s2-text'>
				<div className='s2-store'>스토어 다운로드</div>
				<div className='s2-header'>
					내 손 안의 <br />
					국민 건강 도우미 ChatAI-Series를 소개합니다.
				</div>
				<div className='s2-descript'>
					간편한 조작을 통해 의료 정보를 얻고 응급상황에 대처하세요.
				</div>
			</div>
			<img className='chatai-s2-image' src={images.chatai2} />
		</div>
	);
};

export default ChatAIIntro;
