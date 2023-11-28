import React from 'react';
import images from 'src/assets/images';
type Props = {};

const ProductS7 = (props: Props) => {
	return (
		<div className='product-s7'>
			<div className='product-s7-text'>
				<img src={images.calogo_b} className='s7-header' />
				<div className='s7-descript'>
					CadAI R&C는 CadAI를 사용하는 인증된 의사들만 가입할 수 있는
					커뮤니티로, CadAI로 진료한 환자의 초음파를 어디에서나 확인 할 수 있는
					플랫폼을 제공합니다. 의사들뿐만 아니라 다양한 의료 정보와 학회 정보
					등도 제공되어 의료 전문가들에게 유용한 정보의 공유와 소통의 장을
					제공합니다.
				</div>
			</div>
			<div className='product-s7-image'>
				<img className='s7-com' src={images.product7_1} />
			</div>
		</div>
	);
};

export default ProductS7;
