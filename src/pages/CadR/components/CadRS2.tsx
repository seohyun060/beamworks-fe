import React from 'react';
import images from 'src/assets/images';
type Props = {};

const CadRS2 = (props: Props) => {
	return (
		<div className='cadr-s2'>
			<img className='cadr-s2-tablet' src={images.cadr2_1} />
			<div className='cadr-s2-text'>
				<div className='s2-demo'>CadAI-Series+</div>
				<div className='s2-header'>
					초음파 검사를 다했다면, R&C로 넘어오세요.
				</div>
				<div className='s2-body'>
					R&C에서는 리포트를 수정하고, 환자나 다른 사람들과 손쉽게 공유할 수
					있습니다. 데이터들은 자동으로 넘어오게 되어 별도의 저장장치가
					필요없습니다.
				</div>
			</div>
			<img className='cadr-s2-desktop' src={images.cadr2_2} />
		</div>
	);
};

export default CadRS2;
