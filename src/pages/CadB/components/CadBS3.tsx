import { VoidFunc } from '@typedef/types';
import React from 'react';
import images from 'src/assets/images';
type Props = {
	modes: string[];
	onPrevClick: VoidFunc;
	onNextClick: VoidFunc;
	current: number;
	modeNames: string[];
};

const CadBS3 = ({
	modes,
	onNextClick,
	onPrevClick,
	current,
	modeNames,
}: Props) => {
	return (
		<div className='cadb-s3'>
			<div className='cadb-s3-cadb'>CadAI-B</div>
			<div className='cadb-s3-header'>진단을 도와줄 4가지의 모드</div>
			<div className='cadb-s3-realtime'>{modeNames[current]}</div>
			<div className='cadb-s3-carousel'>
				<img className='s3-mock' src={images.mock2} />
				<img
					className='s3-prev'
					src={current !== 0 ? images.left_b : images.left_w}
					onClick={onPrevClick}
				/>
				<div className='s3-frame'>
					<div
						className='s3-frame-mode'
						style={{
							transform: `translateX(-${current * 105}%)`,
							transition: 'transform 0.3s cubic-bezier(0.5, 0, 1, 0.5)',
						}}
					>
						{modes.map((mode, index) => (
							<img
								src={mode}
								className={
									index === current
										? 's3-frame-mode-slide-active'
										: 's3-frame-mode-slide'
								}
							/>
						))}
					</div>
				</div>
				<img
					className='s3-next'
					src={current !== 3 ? images.right_b : images.right_w}
					onClick={onNextClick}
				/>
			</div>
		</div>
	);
};

export default CadBS3;
