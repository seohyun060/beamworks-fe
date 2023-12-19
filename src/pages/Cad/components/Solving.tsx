import React from 'react';
import images from 'src/assets/images';
import { SolutionType, SolutionContent } from '@typedef/types';
import useProductStore from '@store/zustand/productZustand';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {
	solution: SolutionContent;
	onSolutionClick: (index: number) => void;
	header: string[];
	//bannerName: string;
};

const Solving = ({ solution, onSolutionClick, header }: Props) => {
	const { selectedSolution } = useProductStore();
	const { languageCode } = useGnbStore();
	return (
		<div className='product-s5'>
			<div className='product-s5-text'>
				<div className='product-s5-text-cadai'>{solution.title}</div>
				<div className='product-s5-text-header'>{header[0]}</div>
				<div className='product-s5-text-divider' />
				<div className='product-s5-text-body'>
					{solution.solutionList.map((solution, index) => (
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
								<span>
									{solution.problem.split('\n').map((text, i) => (
										<p key={i}>{text}</p>
									))}
								</span>
							</div>
							<div className='solution'>
								{solution.solution.split('\n').map((text, i) => (
									<p key={i}>{text}</p>
								))}
							</div>
							<div className='divider' />
						</div>
					))}
				</div>
			</div>
			<div
				className={'product-s5-image'}
				style={{
					backgroundImage: `url(${solution.bannerList[4]})`,
					transition: 'background-image 0.3s ease-in-out',
				}}
			/>
		</div>
	);
};

export default Solving;
