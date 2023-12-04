import React from 'react';
import images from 'src/assets/images';

type Props = {};

const CadRBanner = (props: Props) => {
	return (
		<div className='cadr-s1'>
			<button className='cadr-s1-button'>웹사이트 방문</button>
			<div className='cadr-s1-text'>
				<img src={images.cadrLogo_b} className='s1-header' />
				<div className='s1-body'>소통의 공간, 리포트를 공유해보세요.</div>
			</div>
		</div>
	);
};

export default CadRBanner;
