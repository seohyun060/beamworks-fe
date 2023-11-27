import React from 'react';
import images from 'src/assets/images';
type Props = {};

const CadRS3 = (props: Props) => {
	return (
		<div className='cadr-s3'>
			<div className='cadr-s3-image'>
				<div className='s3-scroll'>
					마우스를 화면 위로 올려 스크롤 해보세요.
				</div>
				<img className='s3-frame' src={images.cadr_mac}></img>
				<div className='s3-mac'>
					<img className='s3-mac-screen' src={images.cadr_macscr}></img>
				</div>
				<img className='s3-phone' src={images.cadrPhone}></img>
			</div>
			<div className='cadr-s3-text'>
				<div className='s3-demo'>CadAI-Series+</div>
				<div className='s3-header'>CadAI-Series를 뒷받침해줄 홈페이지</div>
				<img className='s3-logo' src={images.cadrLogo_b}></img>
				<div className='s3-body'>
					CadAI-B는 유방 초음파 검사에서 의사의 오른팔 역할을 하는
					프로그램입니다. 실시간으로 병변을 발견하고, 의사에게 협력하여 유용한
					정보를 제공하여 진단 과정을 효율적으로 지원합니다.
				</div>
			</div>
		</div>
	);
};

export default CadRS3;
