import { VoidFunc } from '@typedef/types';
import React from 'react';
import images from 'src/assets/images';
type Props = {
	current: number;
	faceList: string[];
	reposition: boolean;
	onPrevClick: VoidFunc;
	onNextClick: VoidFunc;
	painTexts: string[];
};

const EeasyPain = ({
	current,
	faceList,
	reposition,
	onNextClick,
	onPrevClick,
	painTexts,
}: Props) => {
	console.log(current);
	return (
		<div className='eeasy-s5'>
			<img className='eeasy-s5-img' src={images.eeasy5_mobile} />
			<div className='eeasy-s5-text'>
				<div className='s5-header'>{painTexts[0]}</div>
				<div className='s5-body'>{painTexts[1]}</div>
				<div className='s5-pain'>
					<img
						className='s5-pain-left'
						src={images.painLeft}
						onClick={onPrevClick}
					/>
					<div className='s5-pain-frame'>
						<div
							className='s5-carousel'
							style={{
								transform: `translateX(-${current * 99.5}%)`,
								transition: reposition
									? 'transform 0s ease-in-out'
									: 'transform 0.2s ease-in-out',
							}}
						>
							{faceList.map((face, index) => (
								<img className='s5-carousel-slide' src={face} />
							))}
						</div>
					</div>
					{/* <img className='s5-pain-face' src={images.eeasy5_pain0} /> */}
					<img
						className='s5-pain-right'
						src={images.painRight}
						onClick={onNextClick}
					/>
				</div>
			</div>
		</div>
	);
};

export default EeasyPain;
