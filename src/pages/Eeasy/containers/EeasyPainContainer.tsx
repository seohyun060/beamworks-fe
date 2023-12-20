import React, { useCallback, useEffect, useState } from 'react';
import EeasyPain from '../components/EeasyPain';
import images from 'src/assets/images';
import useGnbStore from '@store/zustand/gnbZustand';
import { painTextsKo } from 'src/lang/EEasyTexts';
import GoogleTranslate from 'src/lang/GoogleTranslate';

type Props = {};

const EeasyPainContainer = (props: Props) => {
	// const [current, setCurrent] = useState(1);
	// const [reposition, setReposition] = useState(false);
	const [isButtonDisabled, setButtonDisabled] = useState(false);
	const faceList = [
		images.eeasy5_pain10,
		images.eeasy5_pain0,
		images.eeasy5_pain2,
		images.eeasy5_pain4,
		images.eeasy5_pain6,
		images.eeasy5_pain8,
		images.eeasy5_pain10,
		images.eeasy5_pain0,
	];
	const len = faceList.length;
	const [state, setState] = useState({ reposition: false, current: 1 });

	const onPrevClick = useCallback(() => {
		if (!isButtonDisabled) {
			setButtonDisabled(true);
			if (state.current === 1) {
				setState({
					reposition: false,
					current: (state.current - 1 + len) % len,
				});
			} else {
				setState({
					reposition: false,
					current: (state.current - 1 + len) % len,
				});
			}
			setTimeout(() => setButtonDisabled(false), 200);
		}
	}, [state, isButtonDisabled]);

	const onNextClick = useCallback(() => {
		if (!isButtonDisabled) {
			setButtonDisabled(true);
			if (state.current === len - 2) {
				setState({ reposition: false, current: (state.current + 1) % len });
			} else {
				setState({ reposition: false, current: (state.current + 1) % len });
			}
			setTimeout(() => setButtonDisabled(false), 200);
		}
	}, [state, isButtonDisabled]);
	const { languageCode } = useGnbStore();
	const [painTexts, setPainTexts] = useState(painTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setPainTexts(painTextsKo);
		} else {
			const data = await GoogleTranslate(painTextsKo, languageCode);
			setPainTexts(data);
		}
	}, [painTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	useEffect(() => {
		if (state.current === 0) {
			setTimeout(() => {
				setState({ reposition: true, current: len - 2 });
			}, 200);
		} else if (state.current === len - 1) {
			setTimeout(() => {
				setState({ reposition: true, current: 1 });
			}, 200);
		}
	}, [state]);
	console.log(state);

	return (
		<EeasyPain
			current={state.current}
			faceList={faceList}
			reposition={state.reposition}
			onPrevClick={onPrevClick}
			onNextClick={onNextClick}
			painTexts={painTexts}
		/>
	);
};

export default EeasyPainContainer;
