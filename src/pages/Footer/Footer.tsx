import React from 'react';
import images from 'src/assets/images';
import './styles/footer.styles.css';
type Props = {
	type: string;
};

const Footer = ({ type }: Props) => {
	return (
		<div
			className='footer'
			style={{
				backgroundColor: type === 'black' ? '#000' : '#fff',
			}}
		>
			<div className='footer-news'>
				<img
					className='footer-news-logo'
					src={type === 'black' ? images.footerLogoW : images.footerLogoB}
				/>
				<div
					className='footer-news-header'
					style={{
						color: type === 'black' ? '#fff' : '#000',
					}}
				>
					뉴스레터를 구독해보세요
				</div>
				<div className='footer-news-body'>
					뉴스레터를 구독하면 최신 소식과 유용한 정보를 주기적으로 받아볼 수
					있어, 항상 업데이트된 정보를 손쉽게 얻을 수 있습니다. 뉴스레터를
					구독하면, 계속해서 풍부한 지식과 인사이트를 쌓을 수 있는 기회를 놓치지
					않을 것입니다.
				</div>
				<div className='footer-news-input'>
					<input
						style={{
							backgroundColor: type === 'black' ? '#000' : '#fff',
							color: type === 'black' ? '#fff' : '#000',
							borderColor: type === 'black' ? '#fff' : '#4d4f58',
						}}
					></input>
					<div
						className='footer-news-input-button'
						style={{
							backgroundColor: type === 'black' ? '#A0A0A0' : '#4D4F58',
						}}
					>
						<span>구독</span>
						<img src={images.rightW} />
					</div>
				</div>
			</div>
			<div className='footer-info'>
				<div className='footer-info-head'>
					<div className='legal'>Legal Notice</div>
					<div className='policy'>Privacy Policy</div>
				</div>
				<div className='footer-info-beamworks'>
					주식회사 빔웍스 BeamWorks Inc.
				</div>
				<div className='footer-info-ceo'>
					<div className='ceo'>CEO</div>
					<div className='kim'>김원화 | 김재일</div>
				</div>
				<div className='footer-info-address'>
					<div className='business'>Business location and address</div>
					<div className='location'>
						107, 3rd Floor, 136-gil, Chilgok Central Road, Buk-gu, Daegu, South
						Korea (Hakjeong-dong)
					</div>
				</div>
				<div className='footer-info-number'>
					<div className='number1'>General Contact Number</div>
					<div className='number2'>053-322-2107</div>
					<div className='email1'>General Contact Email</div>
					<div className='email2'>bws@beamworks.co.kr</div>
					<div className='fax1'>Fax</div>
					<div className='fax2'>053-322-2108</div>
				</div>
				<div className='footer-info-logo'>
					<img src={images.footerLogo} />
				</div>
			</div>
		</div>
	);
};

export default Footer;
