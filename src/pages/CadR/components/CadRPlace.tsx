import { VoidFunc } from '@typedef/types';
import React from 'react';
import images from 'src/assets/images';
type Props = {
	current: number;
	content: {
		text: string;
		imgs: string[];
	};
	onPrevClick: VoidFunc;
	onNextClick: VoidFunc;
	placeTexts: string[];
};

const CadRPlace = ({
	current,
	content,
	onPrevClick,
	onNextClick,
	placeTexts,
}: Props) => {
	return (
		<div className='cadr-s6'>
			<div className='cadr-s6-rc'>CadAI-R&C</div>
			<div className='cadr-s6-header'>{placeTexts[0]}</div>
			<div className='cadr-s6-where'>{placeTexts[1]}</div>
			<div className='cadr-s6-carousel'>
				<img
					className='s6-prev'
					src={current !== 0 ? images.left_b : images.left_w}
					onClick={onPrevClick}
				/>
				<div className='s6-frame'>
					<div
						className='s6-frame-place'
						style={{
							transform: `translateX(-${current * 42.5}vw)`,
							transition: 'transform 0.5s ease-in-out',
						}}
					>
						{content.imgs.map((img, index) => (
							<div
								key={index}
								className={'s6-frame-place-slide'}
								style={{
									backgroundImage: `url(${img})`,
									transition: 'background-image 0.5s ease-in-out',
								}}
							/>
						))}
					</div>
				</div>
				<img
					className='s6-next'
					src={current !== 2 ? images.right_b : images.right_w}
					onClick={onNextClick}
				/>
			</div>
		</div>
	);
};

export default CadRPlace;
