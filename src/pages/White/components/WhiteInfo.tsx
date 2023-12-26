import { PubInfo } from '@typedef/types';
import images from 'src/assets/images';
import React from 'react';

type Props = {
	white: PubInfo;
	onInsightClick: (id: number) => void;
};

const whitelicationInfo = ({ white, onInsightClick }: Props) => {
	return (
		<div
			className='winfo'
			onClick={() => {
				onInsightClick(white.id);
			}}
		>
			<div className='winfo-title'>{white.title}</div>
			<div className='winfo-author'>
				<span className='winfo-author-label'>Author</span>
				<span className='winfo-author-text'>{white.author}</span>
			</div>
			<div className='winfo-date'>
				<span className='winfo-date-label'>whitelication</span>
				<span className='winfo-date-text'>{white.date}</span>
			</div>
			<div className='winfo-more'>
				<span className='winfo-more-text'>자세히 알아보기</span>
				<img className='winfo-more-arrow' src={images.rightB} />
			</div>
		</div>
	);
};

export default whitelicationInfo;
