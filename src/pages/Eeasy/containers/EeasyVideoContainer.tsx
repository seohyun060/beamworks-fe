import React, { useCallback, useState } from 'react';
import EeasyVideo from '../components/EeasyVideo';
import images from 'src/assets/images';

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

	return <EeasyVideo playList={playList} onPlayClick={onPlayClick} />;
};

export default EeasyVideoContainer;
