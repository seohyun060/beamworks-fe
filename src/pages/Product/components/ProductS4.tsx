import React from 'react';
import images from 'src/assets/images';
type Props = {};

const ProductS4 = (props: Props) => {
	return (
		<div className='product-s4'>
			<div className='product-s4-text'>
				<div className='product-s4-text-header'>Surface Pro 9 제공</div>
				<div className='product-s4-text-body'>
					태블릿만 연결하면 <br />
					어떠한 초음파 기기에서도 사용이 가능합니다.
				</div>
			</div>
			<img className='product-s4-img' src={images.product4} />
		</div>
	);
};

export default ProductS4;
