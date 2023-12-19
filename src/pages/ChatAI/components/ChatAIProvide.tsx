import React from 'react';
import images from 'src/assets/images';
type Props = {
	provideTexts: string[];
};

const ChatAIProvide = ({ provideTexts }: Props) => {
	return (
		<div className='chatai-s3'>
			<div className='chatai-s3-text'>
				<div className='s3-header'>
					{provideTexts[0].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
				<div className='s3-body'>{provideTexts[1]}</div>
			</div>
		</div>
	);
};

export default ChatAIProvide;
