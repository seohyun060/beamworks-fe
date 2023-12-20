import React from 'react';
import images from 'src/assets/images';
type Props = {
	writeTexts: string[];
};

const CadRWrite = ({ writeTexts }: Props) => {
	return (
		<div className='cadr-s2'>
			<img className='cadr-s2-tablet' src={images.cadr2_1} />
			<div className='cadr-s2-text'>
				<div className='s2-demo'>CadAI-R&C</div>
				<div className='s2-header'>
					{writeTexts[0].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
				<div className='s2-body'>{writeTexts[1]}</div>
			</div>
			<img className='cadr-s2-desktop' src={images.cadr2_2} />
		</div>
	);
};

export default CadRWrite;
