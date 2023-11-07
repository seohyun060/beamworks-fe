import React from 'react';
import images from 'src/assets/images';
type Props = {};

const AwardS2 = (props: Props) => {
	return (
		<div className='award-s2'>
			<img src={images.awardback2} />
			<div className='award-s2-header'>빔웍스의 연혁</div>
		</div>
	);
};

export default AwardS2;
