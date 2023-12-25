import { PubInfo } from '@typedef/types';
import images from 'src/assets/images';
import React from 'react';

type Props = {
	pub: PubInfo;
};

const PublicationInfo = ({ pub }: Props) => {
	return (
		<div className='pinfo'>
			<div className='pinfo-title'>{pub.title}</div>
			<div className='pinfo-author'>
				<span className='pinfo-author-label'>Author</span>
				<span className='pinfo-author-text'>{pub.author}</span>
			</div>
			<div className='pinfo-date'>
				<span className='pinfo-date-label'>Publication</span>
				<span className='pinfo-date-text'>{pub.date}</span>
			</div>
			<div className='pinfo-more'>
				<span className='pinfo-more-text'>자세히 알아보기</span>
				<img className='pinfo-more-arrow' src={images.rightB} />
			</div>
		</div>
	);
};

export default PublicationInfo;
