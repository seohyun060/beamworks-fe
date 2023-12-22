import React from 'react';
import images from 'src/assets/images';
import NewsInfoContainer from '../containers/NewsInfoContainer';
import { NewsThumbnail } from '@typedef/types';
import Pagination from './Pagination';
import useNewsPageStore from '@store/zustand/newsPageZustand';
type Props = {
	recent: boolean;
	onRecentClick: VoidFunction;
	onPopularClick: VoidFunction;
	newsLst: NewsThumbnail[];
};

const NewsList = ({
	recent,
	onRecentClick,
	onPopularClick,
	newsLst,
}: Props) => {
	const { currentPage, totalPage, onMovePage, onNumberClick } =
		useNewsPageStore();
	return (
		<div className='news-lst'>
			<div className='news-lst-mini'>뉴스 / 기사</div>
			<div className='news-lst-title'>빔웍스의 소식을 접해보세요.</div>
			<div className='news-lst-select'>
				<button
					className={recent ? 'select-btn-active' : 'select-btn'}
					onClick={onRecentClick}
				>
					최신순
				</button>
				<button
					className={!recent ? 'select-btn-active' : 'select-btn'}
					onClick={onPopularClick}
				>
					인기순
				</button>
				<div className='select-search'>
					<input className='select-search-input' placeholder='Search'></input>
					<img className='select-search-img' src={images.search} />
				</div>
			</div>
			<div className='news-lst-body'>
				{newsLst.map((news, index) => (
					<NewsInfoContainer key={index} news={news} />
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

export default NewsList;
