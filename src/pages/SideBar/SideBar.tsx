import React from 'react';
import './styles/sidebar.styles.css';
import images from 'src/assets/images';
import { motion, useAnimation } from 'framer-motion';
type Props = {
	dots: string[];
	arrow: string;
	onArrowClick: () => void;
};

const SideBar = ({ dots, arrow, onArrowClick }: Props) => {
	return (
		<div className='sidebar'>
			<div className='sidebar-dots'>
				{dots.map((dot, index) => (
					<div className={dot} key={index} />
				))}
			</div>
			<img className={arrow} onClick={onArrowClick}></img>
		</div>
	);
};

export default SideBar;
