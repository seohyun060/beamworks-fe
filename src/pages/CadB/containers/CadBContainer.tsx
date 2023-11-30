import React, { useEffect, useRef, useState } from 'react';
import CadB from '../CadB';
import images from 'src/assets/images';
import { CadbMode } from '@typedef/types';
import { rm } from 'fs';
type Props = {};

const CadBContainer = (props: Props) => {
	const pageRef: any = useRef();
	//let scrollPosition = 0;
	const [scrollPosition, setScrollPosition] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			// Access the current scroll position using scrollContainerRef
			setScrollPosition(
				Math.floor(pageRef.current.scrollTop / window.innerHeight),
			);
			// scrollPosition = Math.floor(
			// 	pageRef.current.scrollTop / window.innerHeight,
			// );
			console.log('Current Scroll Position:', scrollPosition);
			//console.log(window.innerHeight);
		};

		// Attach the scroll event listener to the scroll container
		pageRef.current.addEventListener('scroll', handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			// scrollContainerRef.current.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return <CadB pageRef={pageRef} scrollPosition={scrollPosition} />;
};

export default CadBContainer;
