import React, { useCallback, useEffect, useState } from 'react';
import CadRSpace from '../components/CadRSpace';
import { CadrContent } from '@typedef/types';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';
type Props = {
	content: CadrContent;
};

const CadRSpaceContainer = ({ content }: Props) => {
	const spaceTextsKo = [
		'커뮤니티',
		'컨텐츠',
		'리포트',
		content.header,
		content.body,
		'모바일은 제공하지 않습니다.',
	];
	const { languageCode } = useGnbStore();
	const [spaceTexts, setSpaceTexts] = useState(spaceTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setSpaceTexts(spaceTextsKo);
		} else {
			const data = await GoogleTranslate(spaceTextsKo, languageCode);
			setSpaceTexts(data);
		}
	}, [spaceTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	return <CadRSpace content={content} spaceTexts={spaceTexts} />;
};

export default CadRSpaceContainer;
