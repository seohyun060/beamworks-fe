import React, { useCallback, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import SideBar from '../SideBar';
type Props = {};

const SideBarContainer = (props: Props) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [arrow, setArrow] = useState('sidebar-arrowwhite');
	const [dots, setDots] = useState([
		'longwhite',
		'shortwhite',
		'shortwhite',
		'shortwhite',
	]);
	const updateScroll = useCallback(() => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	}, [scrollPosition]);
	const handleSideBar = useCallback(() => {
		if (scrollPosition < window.innerWidth * 0.5625 - 382) {
			const updatedList = [
				'longwhite',
				'shortwhite',
				'shortwhite',
				'shortwhite',
			];
			setDots(updatedList);
			setArrow('sidebar-arrowwhite');
			console.log(0);
		} else if (scrollPosition < 2 * window.innerWidth * 0.5625 - 382) {
			const updatedList = ['shortgray', 'longgray', 'shortgray', 'shortgray'];
			setDots(updatedList);
			setArrow('sidebar-arrowgray');
			console.log(1);
		} else if (scrollPosition < 3 * window.innerWidth * 0.5625 - 382) {
			const updatedList = [
				'shortwhite',
				'shortwhite',
				'longwhite',
				'shortwhite',
			];
			setDots(updatedList);
			setArrow('sidebar-arrowwhite');
			console.log(2);
		} else {
			const updatedList = ['shortgray', 'shortgray', 'shortgray', 'longgray'];
			setDots(updatedList);
			setArrow('sidebar-arrownone');
			console.log(3);
		}
	}, [dots, scrollPosition, arrow]);
	const scrollToSmoothly = (targetY: number, duration: number) => {
		const startY = window.scrollY;
		const distance = targetY - startY;
		const startTime = performance.now();

		const easeInOutQuad = (t: number) =>
			t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

		const animation = (currentTime: number) => {
			const elapsedTime = currentTime - startTime;
			const scrollPosition =
				easeInOutQuad(elapsedTime / duration) * distance + startY;

			window.scrollTo(0, scrollPosition);

			if (elapsedTime < duration) {
				requestAnimationFrame(animation);
			}
		};

		requestAnimationFrame(animation);
	};
	const onArrowClick = useCallback(() => {
		let targetY = 0;
		if (scrollPosition < window.innerWidth * 0.5625 - 382) {
			// window.scrollTo(0, 1080);
			targetY = window.innerWidth * 0.5625;
		} else if (scrollPosition < 2 * window.innerWidth * 0.5625 - 382) {
			// window.scrollTo(0, 2160);
			targetY = 2 * window.innerWidth * 0.5625;
		} else if (scrollPosition < 3 * window.innerWidth * 0.5625 - 382) {
			// window.scrollTo(0, 3240);
			targetY = 3 * window.innerWidth * 0.5625;
		}
		scrollToSmoothly(targetY, 500);
	}, [scrollPosition]);

	useEffect(() => {
		window.addEventListener('scroll', updateScroll);
		//console.log(scrollPosition);
		handleSideBar();
	}, [scrollPosition]);
	return <SideBar dots={dots} arrow={arrow} onArrowClick={onArrowClick} />;
};

export default SideBarContainer;
