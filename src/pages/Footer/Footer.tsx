import React from 'react';
import images from 'src/assets/images';
import './styles/footer.styles.css';
type Props = {
	type: string;
	infoTexts: string[];
};

const Footer = ({ type, infoTexts }: Props) => {
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
					{infoTexts[0]}
				</div>
				<div className='footer-news-body'>{infoTexts[1]}</div>
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
						<span>{infoTexts[2]}</span>
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
				<div className='footer-info-maddr'>
					<div className='maddr-label'>주소</div>
					<div className='maddr-text'>
						대구광역시 북구 칠곡중앙대로 136길 107 (학정동) 3층 빔웍스
					</div>
				</div>
				<div className='footer-info-memail'>
					<div className='maddr-label'>이메일</div>
					<div className='maddr-text'>bws@beamworks.co.kr</div>
				</div>
				<div className='footer-info-mnumber'>
					<div className='mnumber'>
						<div className='mnumber-label'>대표번호</div>
						<div className='mnumber-text'>053-322-2107</div>
					</div>
					<div className='mnumber'>
						<div className='mnumber-label'>팩스</div>
						<div className='mnumber-text'>053-322-2108</div>
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
