import React from 'react';
import images from 'src/assets/images';
type Props = {
	shareTexts: string[];
};

const CadRShare = ({ shareTexts }: Props) => {
	return (
		<div className='cadr-s5'>
			<div className='cadr-s5-header'>{shareTexts[0]}</div>
			<div className='cadr-s5-body'>{shareTexts[1]}</div>
		</div>
	);
};

export default CadRShare;
