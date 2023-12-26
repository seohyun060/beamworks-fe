import Pagination from 'src/pages/News/components/Pagination';
import usewhitePageStore from '@store/zustand/whitePageZustand';
import React from 'react';
import images from 'src/assets/images';
import useNewsPageStore from '@store/zustand/newsPageZustand';
import WhiteInfo from './WhiteInfo';
import { PubInfo } from '@typedef/types';
import useWhitePageStore from '@store/zustand/whitePageZustand';
type Props = {
	whites: PubInfo[];
	onInsightClick: (id: number) => void;
};

const WhiteList = ({ whites, onInsightClick }: Props) => {
	const { currentPage, totalPage, onMovePage, onNumberClick } =
		useWhitePageStore();
	return (
		<div className='white-lst'>
			<div className='white-lst-title'>White Paper</div>
			<div className='white-lst-search'>
				<input className='search-input' placeholder='Search'></input>
				<img className='search-img' src={images.search} />
			</div>
			<div className='white-lst-body'>
				{whites.map((white, index) => (
					<WhiteInfo
						white={white}
						key={index}
						onInsightClick={onInsightClick}
					/>
				))}
			</div>
			<Pagination
				currentPage={currentPage}
				totalPage={totalPage}
				onMovePage={onMovePage}
				onNumberClick={onNumberClick}
			/>
		</div>
	);
};

export default WhiteList;
