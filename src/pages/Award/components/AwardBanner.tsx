import React from 'react';
import images from 'src/assets/images';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {
	texts: string[];
};

const AwardBanner = ({ texts }: Props) => {
	return (
		<div className='award-s1'>
			<div className='award-s1-header'>{texts[0]}</div>
			<div className='award-s1-body'>
				{/* 2021년 7월에 설립된 빔웍스는 빠른 성장을 이루고 있습니다.
				<br /> 빔웍스는 직원을 성장을 위해 최선을 다하며 직원은 환자와 의료진을
				위해 끊임없이 연구하기에
				<br /> 모두에게 건강한 삶을 제공하도록 합니다. */}

				{texts[1].split('\n').map((text, i) => (
					<p key={i}>{text}</p>
				))}
			</div>
			<img src={images.awardback1} />
		</div>
	);
};

export default AwardBanner;
