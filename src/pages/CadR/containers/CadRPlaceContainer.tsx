import React, { useCallback, useEffect, useRef, useState } from 'react';
import CadRPlace from '../components/CadRPlace';
import images from 'src/assets/images';
import useCadbStore from '@store/zustand/cadbZustand';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';
import { captureRejectionSymbol } from 'events';
type Props = {};

const CadRPlaceContainer = (props: Props) => {
	const [current, setCurrent] = useState(0);

	const [content, setContent] = useState({
		text: '길거리에서',
		imgs: [images.cadr6_1c, images.cadr6_2b, images.cadr6_3b],
	});
	const contentRef = useRef<any>(content);
	const placeTextsKo = ['장소에 제한을 두지마세요', contentRef.current.text];
	const onPrevClick = useCallback(() => {
		if (current > 0) {
			setCurrent(current - 1);
		}
	}, [current]);
	const onNextClick = useCallback(() => {
		if (current < 2) {
			setCurrent(current + 1);
		}
	}, [current]);
	const { languageCode } = useGnbStore();
	const [placeTexts, setPlaceTexts] = useState(placeTextsKo);
	const getTranslate = useCallback(async () => {
		const placeTextsKo = ['장소에 제한을 두지마세요', content.text];
		console.log(content, contentRef.current);
		if (languageCode === 'ko') {
			setPlaceTexts(placeTextsKo);
		} else {
			const data = await GoogleTranslate(placeTextsKo, languageCode);
			setPlaceTexts(data);
		}
	}, [placeTexts, languageCode, content, contentRef, current]);

	useEffect(() => {
		if (current === 0) {
			setContent({
				text: '길거리에서',
				imgs: [images.cadr6_1c, images.cadr6_2b, images.cadr6_3b],
			});
		} else if (current === 1) {
			setContent({
				text: '일상속에서',
				imgs: [images.cadr6_1b, images.cadr6_2c, images.cadr6_3b],
			});
		} else if (current === 2) {
			setContent({
				text: '병원에서',
				imgs: [images.cadr6_1b, images.cadr6_2b, images.cadr6_3c],
			});
		}

		return () => {};
	}, [current, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode, current, content]);
	return (
		<CadRPlace
			current={current}
			content={content}
			onPrevClick={onPrevClick}
			onNextClick={onNextClick}
			placeTexts={placeTexts}
		/>
	);
};

export default CadRPlaceContainer;
