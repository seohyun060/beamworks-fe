import React from 'react';
import NewsInfo from '../components/NewsInfo';
import { NewsThumbnail } from '@typedef/types';
type Props = {
	news: NewsThumbnail;
};

const NewsInfoContainer = ({ news }: Props) => {
	return <NewsInfo news={news} />;
};

export default NewsInfoContainer;
