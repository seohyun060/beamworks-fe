import React from 'react';
import images from 'src/assets/images';
type Props = {};

const EeasyS3 = (props: Props) => {
	return (
		<div className='eeasy-s3'>
			<div className='eeasy-s3-search'>
				<img className='s3-sbox' src={images.mainSubSearch}></img>
				<div className='s3-header'>증상 검색 기능</div>
				<div className='s3-body'>
					증상을 바로 검색하여
					<br />
					바로 원하는 의료 정보를 얻을 수 있어요
				</div>
				<img className='s3-cbox' src={images.classifyStart} />
				<div className='s3-header'>개인화된 분류 서비스 선택 가능</div>
				<div className='s3-body'>
					사용자에 따라 맞춤형 분류 서비스를
					<br /> 선택할 수 있어요.
				</div>
			</div>
			<div className='eeasy-s3-mobile'>
				<img className='s3-logo' src={images.eeasyLogo} />
				<img className='s3-mini' src={images.eeasy3_miniLogo} />
				<img className='s3-mobile' src={images.eeasy3_mobile} />
			</div>
			<div className='eeasy-s3-medical'>
				<div className='s3-header'>실시간 의료 시설 현황</div>
				<div className='s3-body'>
					의료 시설의 현황을 실시간으로
					<br />
					파악할 수 있습니다.
				</div>
				<img className='s3-mbox' src={images.eeasy3_medical} />
			</div>
		</div>
	);
};

export default EeasyS3;
