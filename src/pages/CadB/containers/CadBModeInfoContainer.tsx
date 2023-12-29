import React, { useCallback, useEffect, useState } from 'react';
import CadModeInfo from '../components/CadBModeInfo';
import { CadbMode } from '@typedef/types';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {
	modeType: CadbMode;
};

const CadBModeInfoContainer = ({ modeType }: Props) => {
	const [toggle, setToggle] = useState(false);
	const modeInfoTextsKo = [modeType.title, modeType.descript, '직접 켜보세요'];
	const [modeInfoTexts, setModeInfoTexts] = useState(modeInfoTextsKo);
	const [portrait, setPortrait] = useState(false);
	const { languageCode } = useGnbStore();
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setModeInfoTexts(modeInfoTextsKo);
		} else {
			const data = await GoogleTranslate(modeInfoTextsKo, languageCode);
			setModeInfoTexts(data);
		}
	}, [modeInfoTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	const handleResize = useCallback(() => {
		if (window.innerWidth > window.innerHeight) {
			setPortrait(false);
		} else {
			setPortrait(true);
		}
	}, [window.innerWidth, window.innerHeight, portrait]);

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
	}, [window.innerWidth]);
	const onToggleClick = useCallback(() => {
		setToggle((prev) => !prev);
	}, [toggle]);

	return (
		<CadModeInfo
			toggle={toggle}
			onToggleClick={onToggleClick}
			modeType={modeType}
			modeInfoTexts={modeInfoTexts}
			portrait={portrait}
		/>
	);
};

export default CadBModeInfoContainer;
