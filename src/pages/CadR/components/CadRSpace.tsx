import { CadrContent } from '@typedef/types';
import React from 'react';
import images from 'src/assets/images';
type Props = {
	content: CadrContent;
};

const CadRSpace = ({ content }: Props) => {
	return (
		<div
			className='cadr-s4'
			style={{
				backgroundImage: `url(${content.backImg})`,
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
						커뮤니티
					</span>
					<span
						className={
							content.type == 'ct' ? 's4-tab-item-active' : 's4-tab-item'
						}
					>
						컨텐츠
					</span>
					<span
						className={
							content.type == 'rp' ? 's4-tab-item-active' : 's4-tab-item'
						}
					>
						리포트
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
				<div className='s4-series'>CadAI-Series+</div>
				<div className='s4-header'>{content.header}</div>
				<div className={content.type === 'rp' ? 's4-nomo-active' : 's4-nomo'}>
					모바일은 제공하지 않습니다.
				</div>
				<div className='s4-body'>{content.body}</div>
			</div>
		</div>
	);
};

export default CadRSpace;
