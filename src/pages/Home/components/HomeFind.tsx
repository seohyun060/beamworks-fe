import React from 'react';
import images from 'src/assets/images';

type Props = {};

const HomeFind = (props: Props) => {
	return (
		<div className='home-s4'>
			<div className='home-s4-text'>
				<div className='header'>빔웍스를 통해 자신을 발견해보세요</div>
				<div className='body'>
					빔웍스는 직원의 성장을 위해 최선을 다하며 <br />
					직원은 환자와 의료진을 위해 끊임없이 연구합니다.
				</div>
				<div className='readmore'>
					<div>직무 더 알아보기</div>
					<img src={images.rightW} />
				</div>
			</div>
		</div>
	);
};

export default HomeFind;