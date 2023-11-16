import React, { useCallback, useState } from 'react';
import CadBS4 from '../components/CadBS4';
import { CadbMode } from '@typedef/types';
type Props = {
	modeType: CadbMode;
};

const CadBS4Container = ({ modeType }: Props) => {
	const [toggle, setToggle] = useState(false);
	const onToggleClick = useCallback(() => {
		setToggle((prev) => !prev);
	}, [toggle]);

	return (
		<CadBS4 toggle={toggle} onToggleClick={onToggleClick} modeType={modeType} />
	);
};

export default CadBS4Container;
