import React, { useEffect, useState } from 'react';
import Home from '../Home';
type Props = {};

const HomeContainer = (props: Props) => {
	const [activeComponent, setActiveComponent] = useState('s1'); // 초기 컴포넌트 설정

	const handleScroll = () => {
		// 스크롤 위치를 감지하여 어떤 컴포넌트가 화면에 보이는지 확인
		const s1: any = document.getElementById('home-s1');
		const s2: any = document.getElementById('home-s2');
		const s3: any = document.getElementById('home-s3');
		const s4: any = document.getElementById('home-s4');

		const scrollPosition = window.scrollY;

		if (scrollPosition < s2.offsetTop) {
			setActiveComponent('s1');
		} else if (scrollPosition < s3.offsetTop) {
			setActiveComponent('s2');
		} else if (scrollPosition < s4.offsetTop) {
			setActiveComponent('s3');
		} else {
			setActiveComponent('s4');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 리스너 추가
		console.log(activeComponent);
		return () => {
			window.removeEventListener('scroll', handleScroll); // 컴포넌트 언마운트 시 이벤트 리스너 제거
		};
	}, []);

	return (
		<>
			<Home />
		</>
	);
};

export default HomeContainer;
