import React from 'react';
import images from 'src/assets/images';
type Props = {};

const EeasyS5 = (props: Props) => {
	return (
		<div className='eeasy-s5'>
			<img className='eeasy-s5-img' src={images.eeasy5_mobile} />
			<div className='eeasy-s5-text'>
				<div className='s5-header'>통증 정도의 선택</div>
				<div className='s5-body'>
					자신에게 느껴지는 통증의 선택을 통해 더 세밀한 진단을 내릴 수 있도록
					합니다.
				</div>
				<div className='s5-pain'>
					<img className='s5-pain-left' src={images.painLeft} />
					<img className='s5-pain-face' src={images.eeasy5_pain} />
					<img className='s5-pain-right' src={images.painRight} />
				</div>
			</div>
		</div>
	);
};

export default EeasyS5;
