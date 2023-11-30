import React from 'react';
import images from 'src/assets/images';
type Props = {};

const EeasyS4 = (props: Props) => {
	return (
		<div className='eeasy-s4'>
			<div className='eeasy-s4-lt'>
				<div className='s4-header'>주 증상 선택을 통한 자가 분류</div>
				<div className='s4-body'>
					자신에게 해당하는 주 증상을 선택하여 언제 어디서나 간편하게 자가분류를
					수행할 수 있습니다.
				</div>
			</div>
			<img className='eeasy-s4-img' src={images.eeasy4_mobile}></img>
			<div className='eeasy-s4-rt'>
				<div className='s4-body'>아래의 “신경계" 버튼을 눌러주세요</div>
				<img className='s4-neuron' src={images.eeasy4_neuron} />
			</div>
		</div>
	);
};

export default EeasyS4;
