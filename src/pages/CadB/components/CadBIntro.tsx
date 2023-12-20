import React from 'react';
import images from 'src/assets/images';
type Props = {
	introTexts: string[];
};

const CadBIntro = ({ introTexts }: Props) => {
	return (
		<div className='cadb-s2'>
			<img className='cadb-s2-image' src={images.cadb2} />
			<div className='cadb-s2-text'>
				<div className='s2-demo'>{introTexts[0]}</div>
				<div className='s2-header'>{introTexts[1]}</div>
				<img className='s2-logo' src={images.cadb_b}></img>
				<div className='s2-body'>{introTexts[2]}</div>
			</div>
		</div>
	);
};

export default CadBIntro;
