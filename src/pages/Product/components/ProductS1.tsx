import React from 'react';
import images from 'src/assets/images';
type Props = {};

const ProductS1 = (props: Props) => {
	return (
		<div className='product-s1'>
			<img className='product-s1-img' src={images.cadaiLogo} />
			<div className='product-s1-text'>
				유방 초음파 실시간 인공지능 프로그램
			</div>
		</div>
	);
};

export default ProductS1;
