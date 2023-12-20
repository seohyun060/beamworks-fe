import { VoidFunc } from '@typedef/types';
import { motion } from 'framer-motion';
import React from 'react';
import images from 'src/assets/images';
type Props = {
	toggle: boolean;
	onToggleClick: VoidFunc;
	nervTexts: string[];
};

const EeasyNerv = ({ toggle, onToggleClick, nervTexts }: Props) => {
	return (
		<div className='eeasy-s4'>
			<div className='eeasy-s4-lt'>
				<div className='s4-header'>{nervTexts[0]}</div>
				<div className='s4-body'>{nervTexts[1]}</div>
			</div>
			{/* <img
				className='eeasy-s4-img'
				src={toggle ? images.eeasy4_mobile2 : images.eeasy4_mobile}
			></img> */}
			<div className='eeasy-s4-img'>
				<motion.img
					//className='eeasy-s4-img'
					src={images.eeasy4_mobile}
					style={{
						position: 'absolute',
						//top: 0,
						opacity: toggle ? 0 : 1,
						transition: 'opacity 0.5s',
					}}
				/>
				<motion.img
					//className='eeasy-s4-img'
					src={images.eeasy4_mobile2}
					style={{
						position: 'absolute',
						opacity: toggle ? 1 : 0,
						transition: 'opacity 0.5s',
					}}
				/>
			</div>

			<div className='eeasy-s4-rt'>
				<div className='s4-body'>{!toggle ? nervTexts[2] : nervTexts[3]}</div>
				<img
					className='s4-neuron'
					src={images.eeasy4_neuron}
					onClick={onToggleClick}
				/>
			</div>
		</div>
	);
};

export default EeasyNerv;
