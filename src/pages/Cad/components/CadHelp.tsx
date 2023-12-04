import React from 'react';
import images from 'src/assets/images';
type Props = {};

const CadHelp = (props: Props) => {
	return (
		<div className='product-s3'>
			<div className='product-s3-curtain'></div>
			<div className='product-s3-text'>
				<div className='product-s3-text-header'>
					진료를 도와주는 캐디(CadAI)와 소통하는 초음파실 환경을 구현합니다.
				</div>
				<div className='product-s3-text-body'>
					이 프로그램은 초음파실 환경을 혁신적으로 변화시켜, <br />
					의사가 홀로 진료하는 것이 아닌 옆에서 신뢰할 수 있는 도우미로서 함께
					일하는 느낌을 제공합니다.
				</div>
			</div>
		</div>
	);
};

export default CadHelp;
