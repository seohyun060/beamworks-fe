import React from 'react';
import images from 'src/assets/images';
type Props = {
	introTexts: string[];
};

const ChatAIIntro = ({ introTexts }: Props) => {
	return (
		<div className='chatai-s2'>
			<div className='chatai-s2-text'>
				<div className='s2-store'>{introTexts[0]}</div>
				<div className='s2-header'>
					{introTexts[1].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
				<div className='s2-descript'>{introTexts[2]} </div>
			</div>
			<img className='chatai-s2-image' src={images.chatai2} />
		</div>
	);
};

export default ChatAIIntro;
