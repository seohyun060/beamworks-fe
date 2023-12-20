import React from 'react';
import images from 'src/assets/images';
type Props = {
	homeTexts: string[];
};

const CadRHome = ({ homeTexts }: Props) => {
	return (
		<div className='cadr-s3'>
			<div className='cadr-s3-image'>
				<div className='s3-scroll'>{homeTexts[0]}</div>
				<img className='s3-frame' src={images.cadr_mac}></img>
				<div className='s3-mac'>
					<img className='s3-mac-screen' src={images.cadr_macscr}></img>
				</div>
				<img className='s3-phone' src={images.cadrPhone}></img>
			</div>
			<div className='cadr-s3-text'>
				<div className='s3-demo'>CadAI-R&C</div>
				<div className='s3-header'>
					{homeTexts[1].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
				<img className='s3-logo' src={images.cadrLogo_b}></img>
			</div>
		</div>
	);
};

export default CadRHome;
