import React, { useCallback, useState } from 'react';
import EeasyS6 from '../components/EeasyS6';
import images from 'src/assets/images';

type Props = {};

const EeasyS6Container = (props: Props) => {
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

	return <EeasyS6 playList={playList} onPlayClick={onPlayClick} />;
};

export default EeasyS6Container;
