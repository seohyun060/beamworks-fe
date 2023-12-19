import React from 'react';
import images from 'src/assets/images';
type Props = {
	eProTexts: string[];
};

const ChatAIPro = ({ eProTexts }: Props) => {
	return (
		<div className='chatai-s4'>
			<div className='chatai-s4-text'>
				<div className='s4-header'>
					<img className='s4-header-cross' src={images.ecross} />
					<img className='s4-header-pro' src={images.epro} />
				</div>
				<div className='s4-body'>
					{eProTexts[0].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
			</div>
			<img className='chatai-s4-image' src={images.chatai4} />
		</div>
	);
};

export default ChatAIPro;
