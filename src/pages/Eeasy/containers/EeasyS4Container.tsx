import React, { useCallback, useState } from 'react';
import EeasyS4 from '../components/EeasyS4';

type Props = {};

const EeasyS4Container = (props: Props) => {
	const [toggle, setToggle] = useState(false);
	const [ntext, setNtext] = useState('아래의 "신경계" 버튼을 눌러주세요');
	const onToggleClick = useCallback(() => {
		setToggle(true);
		setNtext('스크롤을 내려주세요');
	}, [toggle]);

	return (
		<EeasyS4 toggle={toggle} onToggleClick={onToggleClick} ntext={ntext} />
	);
};

export default EeasyS4Container;
