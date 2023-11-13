import React from 'react';
import images from 'src/assets/images';
import { Solution } from '@typedef/types';
import useProductStore from '@store/rootZustand';
type Props = {
	solutionList: Solution[];
	onSolutionClick: (index: number) => void;
};

const ProductS5 = ({ solutionList, onSolutionClick }: Props) => {
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
			<img className='product-s5-image' src={images.product5} />
		</div>
	);
};

export default ProductS5;
