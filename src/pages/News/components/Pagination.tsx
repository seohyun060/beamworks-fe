import useNewsPageStore from '@store/zustand/newsPageZustand';
import React, { useEffect, useState } from 'react';
import images from 'src/assets/images';
type Props = {
	currentPage: number;
	totalPage: number;
	onMovePage: any;
	onNumberClick: any;
};

const Pagination = ({
	currentPage,
	totalPage,
	onMovePage,
	onNumberClick,
}: Props) => {
	const [prevAble, setPrevAble] = useState(false);
	const [nextAble, setNextAble] = useState(true);
	const startIndex = Math.floor((currentPage - 1) / 5) * 5 + 1;
	const endIndex = startIndex + 4 > totalPage ? totalPage : startIndex + 4;
	const [currentPages, setCurrentPages] = useState<number[]>([]);
	useEffect(() => {
		setPrevAble(startIndex === 1 ? false : true);
		setNextAble(endIndex === totalPage ? false : true);

		setCurrentPages(
			Array.from(
				{ length: endIndex - startIndex + 1 },
				(_, i) => startIndex + i,
			),
		);
		return () => {};
	}, [currentPage, totalPage]);

	console.log(currentPage, prevAble, nextAble, totalPage, startIndex, endIndex);
	return (
		<div className='page'>
			<img
				src={prevAble ? images.startB : images.startW}
				onClick={() => prevAble && onMovePage('start', startIndex, endIndex)}
			/>
			<img
				src={prevAble ? images.prevB : images.prevW}
				onClick={() => prevAble && onMovePage('prev', startIndex, endIndex)}
			/>
			{currentPages.map((page, index) => (
				<span
					onClick={() => {
						onNumberClick(page);
					}}
					className={
						page === currentPage ? 'page-number-active' : 'page-number'
					}
				>
					{page}
				</span>
			))}
			<img
				src={nextAble ? images.nextB : images.nextW}
				onClick={() => nextAble && onMovePage('next', startIndex, endIndex)}
			/>
			<img
				src={nextAble ? images.endB : images.endW}
				onClick={() => nextAble && onMovePage('end', startIndex, endIndex)}
			/>
		</div>
	);
};

export default Pagination;
