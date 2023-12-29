import useProductStore from '@store/zustand/productZustand';
import React from 'react';

type Props = {
	innerWidth: number;
	innerHeight: number;
	handTexts: string[];
};

const EeasyHand = ({ innerWidth, innerHeight, handTexts }: Props) => {
	console.log(window.innerWidth);

	const { portrait } = useProductStore();
	console.log(portrait, 'checkcheck');

	return (
		<div
			className='eeasy-s2'
			style={{
				backgroundPosition:
					innerHeight / innerWidth > 9 / 16 && !portrait
						? `calc(${(9 / 16 - innerHeight / innerWidth) * 100}vw)` // 배경이미지의 손이 텍스트 왼편에 위치하도록 조정
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
