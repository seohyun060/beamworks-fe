import React, { useEffect, useRef } from 'react';

import IntroduceAbout from './components/IntroduceAbout';
import IntroduceSlogun from './components/IntroduceSlogun';
import IntroduceMission from './components/IntroduceMission';
import IntroduceMissionCarousel from './components/IntroduceMissionCarousel';
import IntroduceBusiness from './components/IntroduceBusiness';
import IntroduceGoals from './components/IntroduceGoals';
import Footer from 'src/pages/Footer/Footer';

import images from 'src/assets/images';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';

const Introduce = () => {
	const scrollContainerRef = useRef(1);

	useEffect(() => {
		const handleScroll = () => {
			// Access the current scroll position using scrollContainerRef
			const scrollPosition = scrollContainerRef.current.scrollTop;
			console.log('Current Scroll Position:', scrollPosition);
		};

		// Attach the scroll event listener to the scroll container
		scrollContainerRef.current.addEventListener('scroll', handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			// scrollContainerRef.current.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='Introduce' ref={scrollContainerRef}>
			{/* 슬로건 섹션 */}
			<IntroduceSlogun />
			{/* 인사말 섹션 */}
			<IntroduceAbout />
			{/* 빔웍스의 미션 섹션 */}
			<IntroduceMission />
			{/* 미션설명 섹션 */}
			<IntroduceMissionCarousel />
			{/* 빔웍스의 사업분야 */}
			<IntroduceBusiness />
			{/* 목표 */}
			<IntroduceGoals />
			{/* 뉴스레터 구독 */}
			<FooterContainer />
		</div>
	);
};

export default Introduce;
