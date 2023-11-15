import React, { useCallback, useState } from 'react';
import CadBS4 from '../components/CadBS4';
type Props = {};

const CadBS4Container = (props: Props) => {
	const [toggle, setToggle] = useState(false);
	const onToggleClick = useCallback(() => {
		setToggle((prev) => !prev);
	}, [toggle]);

	return <CadBS4 toggle={toggle} onToggleClick={onToggleClick} />;
};

export default CadBS4Container;
