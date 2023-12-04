import React, { useCallback, useEffect, useState } from 'react';
import Solving from '../components/Solving';
import { SolutionType, SolutionContent } from '@typedef/types';
import useProductStore from '@store/zustand/productZustand';
import images from 'src/assets/images';
type Props = {
	solution: SolutionContent;
};

const SolvingContainer = ({ solution }: Props) => {
	const { selectedSolution, setSelectedSolution } = useProductStore();

	//const [bannerName, setBannerName] = useState('product-s5-image-0');
	const onSolutionClick = useCallback(
		(index: number) => {
			setSelectedSolution(index);
			console.log(selectedSolution);
		},

		[selectedSolution],
	);
	useEffect(() => {
		return () => {};
	}, []);
	// useEffect(() => {
	// 	console.log(selectedSolution);
	// 	if (selectedSolution == 0) {
	// 		setBannerName('product-s5-image-1');
	// 	} else if (selectedSolution == 1) {
	// 		setBannerName('product-s5-image-2');
	// 	} else {
	// 		setBannerName('product-s5-image-0');
	// 	}
	// 	return () => {};
	// }, [selectedSolution]);

	return (
		<Solving
			solution={solution}
			onSolutionClick={onSolutionClick}

			//bannerName={bannerName}
		/>
	);
};

export default SolvingContainer;
