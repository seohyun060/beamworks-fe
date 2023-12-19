import React from 'react';
import images from 'src/assets/images';
type Props = {
	kiwiTexts: string[];
};

const ChatAIKiwi = ({ kiwiTexts }: Props) => {
	return (
		<div className='chatai-s6'>
			<img className='s6-kiwi1' src={images.chatai6_1}></img>
			<img className='s6-kiwi2' src={images.chatai6_2}></img>
			<div className='chatai-s6-text'>
				<img className='s6-kiwi' src={images.kiwi} />
				<img className='s6-header' src={images.kiwilogo}></img>
				<div className='s6-body'>
					{kiwiTexts[0].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default ChatAIKiwi;
