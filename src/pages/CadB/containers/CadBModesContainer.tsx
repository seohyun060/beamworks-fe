import React, { useCallback, useState } from 'react';
import CadBModes from '../components/CadBModes';
import images from 'src/assets/images';
type Props = {};

const CadBModesContainer
	
	
	
	
	
	
	= (props: Props) => {
	//const [modes, setModes] = useState<string[]>([])
	const [current, setCurrent] = useState(0);
	//const length = 4;
	const modes = [
		images.cbslide1,
		images.cbslide2,
		images.cbslide3,
		images.cbslide4,
	];
	const modeNames = [
		'Realtime-mode',
		'Real time-mode CadAI-map ON',
		'Freeze-mode',
		'Measure-mode',
	];
	const onPrevClick = useCallback(() => {
		if (current > 0) {
			setCurrent(current - 1);
		}
	}, [current]);
	const onNextClick = useCallback(() => {
		if (current < 3) {
			setCurrent(current + 1);
		}
	}, [current]);

	return (
		<CadBModes
			modes={modes}
			onPrevClick={onPrevClick}
			onNextClick={onNextClick}
			current={current}
			modeNames={modeNames}
		/>
	);
};

export default CadBModesContainer;
