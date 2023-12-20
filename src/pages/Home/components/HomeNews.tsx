import React from 'react';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import images from 'src/assets/images';
import { MainNews } from '@typedef/types';
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
};

const HomeNews = ({
	selectedTab,
	onTabClick,
	tabs,
	formatDate,
	filteredList,
	newsTexts,
}: Props) => {
	return (
		<div className='home-s3'>
			<div className='home-s3-header'>
				<span className='home-s3-header-text'>{newsTexts[0]}</span>
				<div className='home-s3-header-readmore'>
					<span>{newsTexts[1]}</span>
					<img src={images.rightB} />
				</div>
			</div>
			<div className='home-s3-tabs'>
				{tabs.map((tab, index) => (
					<div
						key={index}
						className={
							selectedTab === tab.type ? `${tab.type}-active` : tab.type
						}
						onClick={() => {
							onTabClick(tab.type);
						}}
					>
						{tab.text}
					</div>
				))}
			</div>
			<div className='home-s3-news'>
				{filteredList.map((news, index) => (
					<div className='home-s3-news-component' key={index}>
						<img className='news-banner' src={news.image} />
						<div className='news-title'>{news.title}</div>
						<div className='news-content'>{news.content}</div>
						<div className='news-footer'>
							<div className='date'>{formatDate(news.date)}</div>
							<img className='rightB' src={images.rightB} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomeNews;
