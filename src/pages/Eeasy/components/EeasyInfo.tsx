import React from 'react';
import images from 'src/assets/images';
type Props = {
	infoTexts: string[];
};

const EeasyInfo = ({ infoTexts }: Props) => {
	return (
		<div className='eeasy-s3'>
			<div className='eeasy-s3-search'>
				<img className='s3-sbox' src={images.mainSubSearch}></img>
				<div className='s3-header'>{infoTexts[0]}</div>
				<div className='s3-body'>
					{infoTexts[1].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
				<img className='s3-cbox' src={images.classifyStart} />
				<div className='s3-header'>{infoTexts[2]}</div>
				<div className='s3-body'>
					{infoTexts[3].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
			</div>
			<div className='eeasy-s3-mobile'>
				<img className='s3-logo' src={images.eeasyLogo} />
				<img className='s3-mini' src={images.eeasy3_miniLogo} />
				<img className='s3-mobile' src={images.eeasy3_mobile} />
			</div>
			<div className='eeasy-s3-medical'>
				<div className='s3-header'>{infoTexts[4]}</div>
				<div className='s3-body'>
					{infoTexts[5].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
				<img className='s3-mbox' src={images.eeasy3_medical} />
			</div>
		</div>
	);
};

export default EeasyInfo;
