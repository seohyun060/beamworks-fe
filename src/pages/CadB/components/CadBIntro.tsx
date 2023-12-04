import React from 'react';
import images from 'src/assets/images';
type Props = {};

const CadBIntro = (props: Props) => {
	return (
		<div className='cadb-s2'>
			<img className='cadb-s2-image' src={images.cadb2} />
			<div className='cadb-s2-text'>
				<div className='s2-demo'>데모버전 사용 가능</div>
				<div className='s2-header'>유방 초음파의 혁신</div>
				<img className='s2-logo' src={images.cadb_b}></img>
				<div className='s2-body'>
					CadAI-B는 유방 초음파 검사에서 의사의 오른팔 역할을 하는
					프로그램입니다. 실시간으로 병변을 발견하고, 의사에게 협력하여 유용한
					정보를 제공하여 진단 과정을 효율적으로 지원합니다.
				</div>
			</div>
		</div>
	);
};

export default CadBIntro;
