import React from 'react';
import images from 'src/assets/images';
type Props = {
	downTexts: string[];
};

const ChatAIDown = ({ downTexts }: Props) => {
	return (
		<div className='chatai-s7'>
			<div className='chatai-s7-text'>
				<div className='s7-header'>{downTexts[0]}</div>
				<div className='s7-body'>
					{downTexts[1].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
				<button className='s7-download'>{downTexts[2]}</button>
			</div>
			<div className='chatai-s7-image'>
				<img className='s7-app' src={images.gstore} />
				<img className='s7-app' src={images.astore}></img>
			</div>
		</div>
	);
};

export default ChatAIDown;
