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
	const onToggleClick = useCallback(() => {
		setToggle((prev) => !prev);
	}, [toggle]);

	return (
		<CadModeInfo
			toggle={toggle}
			onToggleClick={onToggleClick}
			modeType={modeType}
			modeInfoTexts={modeInfoTexts}
		/>
	);
};

export default CadBModeInfoContainer;
