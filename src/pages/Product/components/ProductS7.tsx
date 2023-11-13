import React from 'react';
import images from 'src/assets/images';
type Props = {};

const ProductS7 = (props: Props) => {
	return (
		<div className='product-s7'>
			<div className='product-s7-text'>
				<img src={images.calogo_b} className='s7-header' />
				<div className='s7-descript'>
					갑상선 초음파 검사를 위한 솔루션으로, 갑상선 영역에서 병변을 탐지하고
					그 위치를 실시간으로 식별합니다. 또한, 갑상선 관련 카테고리와 용어
					정보를 제공하여 의사와 환자에게 소중한 도움을 제공합니다.
				</div>
			</div>
			<div className='product-s7-image'>
				<img className='s7-phone' src={images.product7_2} />
				<img className='s7-com' src={images.product7_1} />
			</div>
		</div>
	);
};

export default ProductS7;
