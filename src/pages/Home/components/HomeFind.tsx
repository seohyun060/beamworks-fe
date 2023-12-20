import React from 'react';
import images from 'src/assets/images';

type Props = {
	findTexts: string[];
};

const HomeFind = ({ findTexts }: Props) => {
	return (
		<div className='home-s4'>
			<div className='home-s4-text'>
				<div className='header'>{findTexts[0]}</div>
				<div className='body'>
					{findTexts[1].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
				<div className='readmore'>
					<div>{findTexts[2]}</div>
					<img src={images.rightW} />
				</div>
			</div>
		</div>
	);
};

export default HomeFind;
