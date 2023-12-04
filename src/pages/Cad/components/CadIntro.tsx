import React from 'react';
import images from 'src/assets/images';
type Props = {};

const CadIntro = (props: Props) => {
	return (
		<div className='product-s2'>
			<div className='product-s2-text'>
				더 정확하고, 더 실시간적인 초음파 영역의 혁신 프로그램 CadAI-Series를
				소개합니다.
			</div>
			<img className='product-s2-img' src={images.product2}></img>
		</div>
	);
};

export default CadIntro;
