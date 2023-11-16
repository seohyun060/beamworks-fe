import { Explore } from '@typedef/types';
import React from 'react';
import images from 'src/assets/images';
type Props = {
	exploreType: Explore;
};

const ProductS8 = ({ exploreType }: Props) => {
	console.log(exploreType.type);
	return (
		<div
			className={exploreType.type == 'cadb' ? 'product-s8-black' : 'product-s8'}
		>
			<div className='s8-header'>{exploreType.title}</div>
			<div className='s8-body'>
				{exploreType.contents.map((content, index) => (
					<div className={`s8-body-box${index + 1}`} key={index}>
						{exploreType.type === 'chatai' ? (
							<>
								<img className={`s8box-chatai1`} src={content.logo1} />
								<img className='s8box-chatai2' src={content.logo2} />
							</>
						) : (
							<>
								<img className={`s8box-logo`} src={content.logo1} />
								<span className='s8box-text'>{content.text}</span>
							</>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductS8;
