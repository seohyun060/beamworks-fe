import React, { useCallback, useEffect, useState } from 'react';
import EeasyVideo from '../components/EeasyVideo';
import images from 'src/assets/images';
import { videoTextsKo } from 'src/lang/EEasyTexts';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';

type Props = {};

const EeasyVideoContainer = (props: Props) => {
	const [playList, setPlayList] = useState([
		{
			playing: true,
			content: images.eeasy6_1,
		},
		{
			playing: false,
			content: images.eeasy6_2,
		},
		{
			playing: false,
			content: images.eeasy6_3,
		},
	]);
	const { languageCode } = useGnbStore();
	const [videoTexts, setVideoTexts] = useState(videoTextsKo);
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setVideoTexts(videoTextsKo);
		} else {
			const data = await GoogleTranslate(videoTextsKo, languageCode);
			setVideoTexts(data);
		}
	}, [videoTexts, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	console.log('video', videoTexts);
	const onPlayClick = useCallback(
		(index: number) => {
			const updatedList = [...playList];
			for (let i = 0; i < 3; i++) {
				if (i == index) {
					updatedList[i].playing = true;
				} else {
					updatedList[i].playing = false;
				}
			}
			setPlayList(updatedList);
		},
		[playList],
	);

	return (
		<EeasyVideo
			playList={playList}
			onPlayClick={onPlayClick}
			videoTexts={videoTexts}
		/>
	);
};

export default EeasyVideoContainer;
