import React, { useCallback, useEffect, useState } from 'react';
import CadRS6 from '../components/CadRS6';
import images from 'src/assets/images';
import useCadbStore from '@store/zustand/cadbZustand';
type Props = {};

const CadRS6Container = (props: Props) => {
	const [current, setCurrent] = useState(0);
	const [content, setContent] = useState({
		text: '길거리에서',
		imgs: [images.cadr6_1c, images.cadr6_2b, images.cadr6_3b],
	});
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
	}, [current]);

	return (
		<CadRS6
			current={current}
			content={content}
			onPrevClick={onPrevClick}
			onNextClick={onNextClick}
		/>
	);
};

export default CadRS6Container;
