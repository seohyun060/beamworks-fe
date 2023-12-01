import { VoidFunc } from '@typedef/types';
import { motion } from 'framer-motion';
import React from 'react';
import images from 'src/assets/images';
type Props = {
	toggle: boolean;
	onToggleClick: VoidFunc;
	ntext: string;
};

const EeasyS4 = ({ toggle, onToggleClick, ntext }: Props) => {
	return (
		<div className='eeasy-s4'>
			<div className='eeasy-s4-lt'>
				<div className='s4-header'>주 증상 선택을 통한 자가 분류</div>
				<div className='s4-body'>
					자신에게 해당하는 주 증상을 선택하여 언제 어디서나 간편하게 자가분류를
					수행할 수 있습니다.
				</div>
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
				<div className='s4-body'>{ntext}</div>
				<img
					className='s4-neuron'
					src={images.eeasy4_neuron}
					onClick={onToggleClick}
				/>
			</div>
		</div>
	);
};

export default EeasyS4;
