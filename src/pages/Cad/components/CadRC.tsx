import React from 'react';
import images from 'src/assets/images';
type Props = {
	rcTexts: string[];
};

const CadRC = ({ rcTexts }: Props) => {
	return (
		<div className='product-s7'>
			<div className='product-s7-text'>
				<img src={images.calogo_b} className='s7-header' />
				<div className='s7-descript'>{rcTexts[0]}</div>
			</div>
			<div className='product-s7-image'>
				<img className='s7-com' src={images.product7_1} />
			</div>
		</div>
	);
};

export default CadRC;
