import React, { useCallback, useState } from 'react';
import ProductS5 from '../components/ProductS5';
import { Solution } from '@typedef/types';
import useProductStore from '@store/zustand/productZustand';
type Props = {};

const ProductS5Container = (props: Props) => {
	const { selectedSolution, setSelectedSolution } = useProductStore();
	const solutionList: Solution[] = [
		{
			index: 0,
			problem:
				'초음파 1건당 2만장 이상의 판독을 실시간으로 수행하면서 피로를 느끼지 않았나요?',
			solution:
				'CadAI-Series는 뛰어난 성능과 편의성을 제공하여 업무의 부담을 덜어줄 수 있을 것입니다.',
		},
		{
			index: 1,
			problem: '병변 크기 측정과 Lexicon 결정이 번거롭지 않았나요?',
			solution:
				'CadAI-Series는 뛰어난 성능과 편의성을 제공하여 업무의 부담을 덜어줄 수 있을 것입니다.',
		},
		{
			index: 2,
			problem: '초음파 검사 시 병변 놓치지 않을까 염려가 있었나요?',
			solution:
				'CadAI-Series는 뛰어난 성능과 편의성을 제공하여 업무의 부담을 덜어줄 수 있을 것입니다.',
		},
		{
			index: 3,
			problem: '초음파 스캔 시 일부 영역 빠뜨리지 않았는지 헷갈렸던 적 있나요?',
			solution:
				'CadAI-Series는 뛰어난 성능과 편의성을 제공하여 업무의 부담을 덜어줄 수 있을 것입니다.',
		},
	];
	const onSolutionClick = useCallback(
		(index: number) => {
			setSelectedSolution(index);
			console.log(selectedSolution);
		},

		[selectedSolution],
	);

	return (
		<ProductS5 solutionList={solutionList} onSolutionClick={onSolutionClick} />
	);
};

export default ProductS5Container;
