import React from 'react';
import './styles/news.styles.css';
import NewsBannerContainer from './containers/NewsBannerContainer';
import NewsListContainer from './containers/NewsListContainer';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';

type Props = {};

const News = (props: Props) => {
	return (
		<div className='news'>
			<NewsBannerContainer />
			<NewsListContainer />
			<FooterContainer />
		</div>
	);
};

export default News;
