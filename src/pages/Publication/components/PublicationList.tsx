import Pagination from 'src/pages/News/components/Pagination';
import usePubPageStore from '@store/zustand/pubPageZustand';
import React from 'react';
import images from 'src/assets/images';
import useNewsPageStore from '@store/zustand/newsPageZustand';
import PublicationInfo from './PublicationInfo';
import { PubInfo } from '@typedef/types';
type Props = {
	pubs: PubInfo[];
};

const PublicationList = ({ pubs }: Props) => {
	const { currentPage, totalPage, onMovePage, onNumberClick } =
		usePubPageStore();
	return (
		<div className='pub-lst'>
			<div className='pub-lst-title'>연구 / 논문</div>
			<div className='pub-lst-search'>
				<input className='search-input' placeholder='Search'></input>
				<img className='search-img' src={images.search} />
			</div>
			<div className='pub-lst-body'>
				{pubs.map((pub, index) => (
					<PublicationInfo pub={pub} key={index} />
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

export default PublicationList;
