import React from 'react';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import images from 'src/assets/images';
import { MainNews, NewsThumbnail } from '@typedef/types';
import NewsInfoContainer from 'src/pages/News/containers/NewsInfoContainer';
import useGnbStore from '@store/zustand/gnbZustand';
import { useNavigate } from 'react-router-dom';
type Props = {
	selectedTab: string;
	onTabClick: (tab: string) => void;
	tabs: {
		type: string;
		text: string;
	}[];
	formatDate: (date: Date) => string;
	filteredList: MainNews[];
	newsTexts: string[];
	newsLst: NewsThumbnail[];
};

const HomeNews = ({
	selectedTab,
	onTabClick,
	tabs,
	formatDate,
	filteredList,
	newsTexts,
	newsLst,
}: Props) => {
	const { onPathClick } = useGnbStore();
	const navigate = useNavigate();
	return (
		<div className='home-s3'>
			<div className='home-s3-header'>
				<span className='home-s3-header-text'>{newsTexts[0]}</span>
				<div
					className='home-s3-header-readmore'
					onClick={() => {
						onPathClick('/news', navigate);
					}}
				>
					<span>{newsTexts[1]}</span>
					<img src={images.rightB} />
				</div>
			</div>

			<div className='home-s3-news'>
				{newsLst.map((news, index) => (
					<NewsInfoContainer key={index} news={news} />
				))}
			</div>
		</div>
	);
};

export default HomeNews;
