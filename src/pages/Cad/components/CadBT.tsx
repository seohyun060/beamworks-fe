import useGnbStore from '@store/zustand/gnbZustand';
import React from 'react';
import images from 'src/assets/images';
type Props = {
	btTexts: string[];
};

const CadBT = ({ btTexts }: Props) => {
	const { languageCode } = useGnbStore();
	return (
		<div className='product-s6'>
			<div className='product-s6-b'>
				<div className='b-descript'>{btTexts[0]}</div>
				<div className='b-mini'>캐디-비</div>
				<div className='b-header'>
					<img src={images.cblogo_b}></img>
					<span
						style={{
							fontSize: languageCode === 'ru' ? '4em' : '5.5em',
						}}
					>{`${btTexts[1]}`}</span>
				</div>
				<img className='b-image' src={images.product6_2}></img>
			</div>
			<div className='product-s6-t'>
				<img className='t-image' src={images.product6_1}></img>
				<div className='t-header'>
					<img src={images.ctlogo_b}></img>
					<span
						style={{
							fontSize: languageCode === 'ru' ? '4em' : '5.5em',
						}}
					>{`${btTexts[2]}`}</span>
				</div>
				<div className='t-mini'>캐디-티</div>
				<div className='t-descript'>{btTexts[3]}</div>
			</div>
		</div>
	);
};

export default CadBT;
