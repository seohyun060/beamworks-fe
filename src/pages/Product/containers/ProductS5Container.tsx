import React, { useCallback, useEffect, useState } from 'react';
import ProductS5 from '../components/ProductS5';
import { Solution, SolutionContent } from '@typedef/types';
import useProductStore from '@store/zustand/productZustand';
import images from 'src/assets/images';
type Props = {
	solution: SolutionContent;
};

const ProductS5Container = ({ solution }: Props) => {
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
		<ProductS5
			solution={solution}
			onSolutionClick={onSolutionClick}

			//bannerName={bannerName}
		/>
	);
};

export default ProductS5Container;
