import useProductStore from '@store/zustand/productZustand';
import { CadrContent } from '@typedef/types';
import React from 'react';
import images from 'src/assets/images';
type Props = {
	content: CadrContent;
	spaceTexts: string[];
};

const CadRSpace = ({ content, spaceTexts }: Props) => {
	const { portrait } = useProductStore();
	return (
		<div
			className='cadr-s4'
			style={{
				backgroundImage: !portrait ? `url(${content.backImg})` : 'none',
			}}
		>
			{/* <img src={images.cadr_cm1} /> */}
			<div className='cadr-s4-image'>
				<div className='s4-tab'>
					<span
						className={
							content.type == 'cm' ? 's4-tab-item-active' : 's4-tab-item'
						}
					>
						{spaceTexts[0]}
					</span>
					<span
						className={
							content.type == 'ct' ? 's4-tab-item-active' : 's4-tab-item'
						}
					>
						{spaceTexts[1]}
					</span>
					<span
						className={
							content.type == 'rp' ? 's4-tab-item-active' : 's4-tab-item'
						}
					>
						{spaceTexts[2]}
					</span>
				</div>
				<img className='s4-tablet' src={content.img1} />
				{content.type !== 'rp' ? (
					<img className='s4-mobile' src={content.img2} />
				) : (
					''
				)}
			</div>
			<div className='cadr-s4-text'>
				<div className='s4-series'>CadAI-R&C</div>
				<div className='s4-header'>{spaceTexts[3]}</div>
				<div className={content.type === 'rp' ? 's4-nomo-active' : 's4-nomo'}>
					{spaceTexts[5]}
				</div>
				<div className='s4-body'>{spaceTexts[4]}</div>
			</div>
		</div>
	);
};

export default CadRSpace;
