import React from 'react';
import images from 'src/assets/images';
type Props = {};

const ProductS6 = (props: Props) => {
	return (
		<div className='product-s6'>
			<div className='product-s6-b'>
				<div className='b-descript'>
					유방 초음파 검사에서 사용되는 프로그램으로, 실시간으로 병변을 탐지하고
					그 위치를 표시하며, 병변의 종류와 관련 용어 정보를 제공해주는
					도우미입니다.
				</div>
				<div className='b-header'>
					<img src={images.cblogo_b}></img>
					<span>(유방)</span>
				</div>
				<img className='b-image' src={images.product6_2}></img>
			</div>
			<div className='product-s6-t'>
				<img className='t-image' src={images.product6_1}></img>
				<div className='t-header'>
					<img src={images.ctlogo_b}></img>
					<span>(갑상선)</span>
				</div>
				<div className='t-descript'>
					갑상선 초음파 검사를 위한 솔루션으로, 갑상선 영역에서 병변을 탐지하고
					그 위치를 실시간으로 식별합니다. 또한, 갑상선 관련 카테고리와 용어
					정보를 제공하여 의사와 환자에게 소중한 도움을 제공합니다.
				</div>
			</div>
		</div>
	);
};

export default ProductS6;
