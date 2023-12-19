import React from 'react';
import images from 'src/assets/images';
type Props = {
	ableTexts: string[];
};

const CadAble = ({ ableTexts }: Props) => {
	return (
		<div className='product-s4'>
			<div className='product-s4-text'>
				<div className='product-s4-text-header'>{ableTexts[0]}</div>
				<div className='product-s4-text-body'>
					{ableTexts[1].split('\n').map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>
			</div>
			<img className='product-s4-img' src={images.product4} />
		</div>
	);
};

export default CadAble;
