import React from 'react';
import images from 'src/assets/images';
type Props = {};

const CadBS1 = (props: Props) => {
	return (
		<div className='cadb-s1'>
			<div className='cadb-s1-button'>
				<span className='s1-demo'>데모버전 사용하기</span>
				<button className='s1-buy'>구입하기</button>
			</div>
			<div className='cadb-s1-text'>
				<img src={images.cadb_w} className='s1-header' />
				<div className='s1-body'>유방 초음파 실시간 인공지능 프로그램</div>
			</div>
		</div>
	);
};

export default CadBS1;
