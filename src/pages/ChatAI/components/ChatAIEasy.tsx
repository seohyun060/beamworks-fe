import React from 'react';
import images from 'src/assets/images';
type Props = {
	eEasyTexts: string[];
};

const ChatAIEasy = ({ eEasyTexts }: Props) => {
	return (
		<div className='chatai-s5'>
			<div className='chatai-s5-text'>
				<div className='s5-header'>
					<img className='s5-header-cross' src={images.ecross} />
					<img className='s5-header-pro' src={images.eeasy} />
				</div>
				<div className='s5-body'>
					{eEasyTexts[0].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
			</div>
			<img className='chatai-s5-image' src={images.chatai5} />
		</div>
	);
};

export default ChatAIEasy;
