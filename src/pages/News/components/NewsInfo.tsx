import { NewsThumbnail } from '@typedef/types';
import React from 'react';
import images from 'src/assets/images';

type Props = {
	news: NewsThumbnail;
};

const NewsInfo = ({ news }: Props) => {
	return (
		<div className='ninfo'>
			<img className='ninfo-img' src={news.image} />
			<div className='ninfo-title'>{news.title}</div>
			<div className='ninfo-content'>{news.content}</div>
			<div className='ninfo-date'>
				<div className='date-text'>{news.date}</div>
				<img className='date-arrow' src={images.rightB} />
			</div>
		</div>
	);
};

export default NewsInfo;
