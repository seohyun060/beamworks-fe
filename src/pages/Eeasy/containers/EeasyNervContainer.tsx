import React, { useCallback, useState } from 'react';
import EeasyNerv from '../components/EeasyNerv';

type Props = {};

const EeasyNervContainer = (props: Props) => {
	const [toggle, setToggle] = useState(false);
	const [ntext, setNtext] = useState('아래의 "신경계" 버튼을 눌러주세요');
	const onToggleClick = useCallback(() => {
		setToggle(true);
		setNtext('스크롤을 내려주세요');
	}, [toggle]);

	return (
		<EeasyNerv toggle={toggle} onToggleClick={onToggleClick} ntext={ntext} />
	);
};

export default EeasyNervContainer;
