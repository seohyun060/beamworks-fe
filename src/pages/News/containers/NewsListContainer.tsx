import React, { useCallback, useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import useCadbStore from '@store/zustand/cadbZustand';
import images from 'src/assets/images';
import { NewsThumbnail } from '@typedef/types';
import useNewsPageStore from '@store/zustand/newsPageZustand';
type Props = {};

const newsLst: NewsThumbnail[] = [];
for (let i = 0; i < 6; i++) {
	newsLst.push({
		image: images.newsImg,
		title: '빔웍스, 위급상황서 중증환자들을 이러쿵 저러쿵 어쩌고 저쩌고',
		content:
			'의료 AI(인공지능) 전문기업 빔웍스(대표 김원화·김재일)가 응급상황에서 이러쿵 저러쿵 어쩌고 저쩌고 테스트를 위한 쓸데없이 긴 문장',
		date: '2023.11.07',
	});
}

const NewsListContainer = (props: Props) => {
	const {
		currentPage,

		setTotalPage,
	} = useNewsPageStore();
	const [recent, setRecent] = useState(true);
	//const [currentPage, setCurrentPage] = useState(1);

	// const [prevAble, setPrevAble] = useState(false);
	// const [nextAble, setNextAble] = useState(true);

	//const [currentPages, setCurrentPages] = useState<number[]>([]);
	// const startIndex = Math.floor(currentPage / 5) * 5 + 1;
	// const endIndex = startIndex + 4 > totalPage ? totalPage : startIndex + 4;

	const onRecentClick = useCallback(() => {
		setRecent(true);
	}, [recent]);
	const onPopularClick = useCallback(() => {
		setRecent(false);
	}, [recent]);
	useEffect(() => {
		setTotalPage(18);
		// setPrevAble(startIndex === 1 ? false : true);
		// setNextAble(endIndex === totalPage ? false : true);

		// setCurrentPages(
		// 	Array.from(
		// 		{ length: endIndex - startIndex + 1 },
		// 		(_, i) => startIndex + i,
		// 	),
		// );
		return () => {};
	}, []);

	// const onMovepage = useCallback(
	// 	(type: string) => {
	// 		if (type === 'next') {
	// 			setCurrentPage(endIndex + 1);
	// 		} else if (type === 'prev') {
	// 			setCurrentPage(startIndex - 1);
	// 		} else if (type === 'start') {
	// 			setCurrentPage(1);
	// 		} else {
	// 			setCurrentPage(totalPage);
	// 		}
	// 	},
	// 	[currentPage],
	// );

	// const onNumberClick = useCallback(
	// 	(number: number) => {
	// 		setCurrentPage(number);
	// 	},
	// 	[currentPage],
	// );

	return (
		<NewsList
			recent={recent}
			onRecentClick={onRecentClick}
			onPopularClick={onPopularClick}
			newsLst={newsLst}
			// currentPage={currentPage}
			// currentPages={currentPages}
			// onNumberClick={onNumberClick}
			// onMovePage={onMovepage}
		/>
	);
};

export default NewsListContainer;
