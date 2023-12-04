import React from 'react';
import images from 'src/assets/images';
type Props = {};

const EeasyBanner = (props: Props) => {
	return (
		<div className='eeasy-s1'>
			<div className='eeasy-s1-text'>
				<img src={images.eeasyLogo} className='s1-header' />
				<div className='s1-body'>
					일반인을 위한 응급자가분류 및 응급 처치 안내 서비스 앱
				</div>
			</div>
		</div>
	);
};

export default EeasyBanner;
