import React from 'react';

type Props = {
	innerWidth: number;
	innerHeight: number;
	handTexts: string[];
};

const EeasyHand = ({ innerWidth, innerHeight, handTexts }: Props) => {
	console.log(window.innerWidth);
	return (
		<div
			className='eeasy-s2'
			style={{
				backgroundPosition:
					innerHeight / innerWidth > 9 / 16
						? `calc(${(9 / 16 - innerHeight / innerWidth) * 100}vw)`
						: 'right',
			}}
		>
			<div className='eeasy-s2-text'>
				<div className='eeasy-s2-text-easy'>{handTexts[0]}</div>
				<div className='eeasy-s2-text-header'>
					{handTexts[1].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
				<div className='eeasy-s2-text-body'>
					{handTexts[2].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default EeasyHand;
