import React from 'react';
import images from 'src/assets/images';
import './styles/footer.styles.css';
type Props = {};

const Footer = (props: Props) => {
	return (
		<div className='footer'>
			<div className='footer-news'>
				<div className='footer-news-header'>뉴스레터를 구독해보세요</div>
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
