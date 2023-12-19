import React from 'react';
import images from 'src/assets/images';
type Props = {
	introTexts: string[];
};

const CadIntro = ({ introTexts }: Props) => {
	return (
		<div className='product-s2'>
			<div className='product-s2-text'>
				{introTexts[0].split('\n').map((text, i) => (
					<p key={i}>{text}</p>
				))}
			</div>
			<img className='product-s2-img' src={images.product2}></img>
		</div>
	);
};

export default CadIntro;
