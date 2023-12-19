import React from 'react';
import images from 'src/assets/images';
type Props = {
	helpTexts: string[];
};

const CadHelp = ({ helpTexts }: Props) => {
	return (
		<div className='product-s3'>
			<div className='product-s3-curtain'></div>
			<div className='product-s3-text'>
				<div className='product-s3-text-header'>{helpTexts[0]}</div>
				<div className='product-s3-text-body'>
					{helpTexts[1].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default CadHelp;
