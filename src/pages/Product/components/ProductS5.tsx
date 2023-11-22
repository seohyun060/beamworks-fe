import React from 'react';
import images from 'src/assets/images';
import { Solution } from '@typedef/types';
import useProductStore from '@store/zustand/productZustand';
type Props = {
	solutionList: Solution[];
	onSolutionClick: (index: number) => void;
	bannerName: string;
};

const ProductS5 = ({ solutionList, onSolutionClick, bannerName }: Props) => {
	const { selectedSolution } = useProductStore();
	return (
		<div className='product-s5'>
			<div className='product-s5-text'>
				<div className='product-s5-text-cadai'>CadAI-Series</div>
				<div className='product-s5-text-header'>기존 문제의 해결</div>
				<div className='product-s5-text-divider' />
				<div className='product-s5-text-body'>
					{solutionList.map((solution, index) => (
						<div
							className={
								selectedSolution === index ? 'solbox-active' : 'solbox'
							}
							key={index}
							onClick={() => {
								onSolutionClick(index);
							}}
						>
							<div className='problem'>
								<img src={images.circledownW} />
								<span>{solution.problem}</span>
							</div>
							<div className='solution'>{solution.solution}</div>
							<div className='divider' />
						</div>
					))}
				</div>
			</div>
			<div
				className={'product-s5-image'}
				style={{
					backgroundImage:
						selectedSolution === 0
							? `url('/assets/images/product5_2.png')`
							: selectedSolution === 1
							? `url('/assets/images/product5_3.png')`
							: `url('/assets/images/product5_1.png')`,
					transition: 'background-image 0.3s ease-in-out',
				}}
			/>
		</div>
	);
};

export default ProductS5;
