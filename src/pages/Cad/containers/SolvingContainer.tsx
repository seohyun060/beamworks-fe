import React, { useCallback, useEffect, useState } from 'react';
import Solving from '../components/Solving';
import { SolutionType, SolutionContent } from '@typedef/types';
import useProductStore from '@store/zustand/productZustand';
import images from 'src/assets/images';
import useGnbStore from '@store/zustand/gnbZustand';
import { solvingTextsKo } from 'src/lang/CadTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {
	solution: SolutionContent;
	setSolution: any;
};

const SolvingContainer = ({ solution, setSolution }: Props) => {
	const { selectedSolution, setSelectedSolution } = useProductStore();
	const { languageCode } = useGnbStore();
	const updatedSolution = solution;
	const [header, setHeader] = useState(solvingTextsKo.header);
	const updatedSolutionList = [...solution.solutionList]; // 기존 솔루션 받아놓기
	const probSol: string[] =
		solution.type === 'cadai'
			? solvingTextsKo.cadaiBody
			: solvingTextsKo.eeasyBody;
	const [translatedProbSol, setTranslatedProbSol] = useState(probSol);

	const onSolutionClick = useCallback(
		(index: number) => {
			setSelectedSolution(index);
			console.log(selectedSolution);
		},

		[selectedSolution],
	);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setTranslatedProbSol(probSol);
			setHeader(solvingTextsKo.header);
		} else {
			const probSolData = await GoogleTranslate(probSol, languageCode); // 받은 배열 api로 해석 돌리기
			const headerData = await GoogleTranslate(
				solvingTextsKo.header,
				languageCode,
			);

			setTranslatedProbSol(probSolData);
			setHeader(headerData);
		}
	}, [probSol, translatedProbSol, languageCode, header]);
	useEffect(() => {
		getTranslate();

		return () => {};
	}, [languageCode]);
	console.log(probSol);
	console.log(translatedProbSol);
	useEffect(() => {
		for (let i = 0; i < translatedProbSol.length; i += 2) {
			updatedSolutionList[Math.floor(i / 2)].problem = translatedProbSol[i]; //해석 돌린거 solution에 다시 넣어주기
			updatedSolutionList[Math.floor(i / 2)].solution =
				translatedProbSol[i + 1];
		}
		updatedSolution.solutionList = updatedSolutionList;
		setSolution(updatedSolution);
		return () => {};
	}, [translatedProbSol, languageCode]);
	console.log(solution.solutionList);

	return (
		<Solving
			solution={solution}
			onSolutionClick={onSolutionClick}
			header={header}
			//bannerName={bannerName}
		/>
	);
};

export default SolvingContainer;
