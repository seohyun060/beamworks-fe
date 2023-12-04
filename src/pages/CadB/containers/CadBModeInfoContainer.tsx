import React, { useCallback, useState } from 'react';
import CadModeInfo from '../components/CadBModeInfo';
import { CadbMode } from '@typedef/types';
type Props = {
	modeType: CadbMode;
};

const CadBModeInfoContainer = ({ modeType }: Props) => {
	const [toggle, setToggle] = useState(false);
	const onToggleClick = useCallback(() => {
		setToggle((prev) => !prev);
	}, [toggle]);

	return (
		<CadModeInfo
			toggle={toggle}
			onToggleClick={onToggleClick}
			modeType={modeType}
		/>
	);
};

export default CadBModeInfoContainer;
