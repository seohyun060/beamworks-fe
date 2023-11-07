import React from 'react';
import images from 'src/assets/images';
type Props = {};

const AwardS1 = (props: Props) => {
	return (
		<div className='award-s1'>
			<div className='award-s1-header'>창립부터 혁신의 길로</div>
			<img src={images.awardback1} />
			<div className='award-s1-body'>
				2021년 7월에 설립된 빔웍스는 빠른 성장을 이루고 있습니다.
				<br /> 빔웍스는 직원을 성장을 위해 최선을 다하며
				<br /> 직원은 환자와 의료진을 위해 끊임없이 연구하기에
				<br /> 모두에게 건강한 삶을 제공하도록 합니다.
			</div>
		</div>
	);
};

export default AwardS1;
