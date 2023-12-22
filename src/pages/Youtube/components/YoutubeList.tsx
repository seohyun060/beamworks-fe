import { NavTitle } from '@typedef/types';
import React from 'react';
import images from 'src/assets/images';
import YoutubePlayer from './YoutubePlayer';
type Props = {
	youtubes: NavTitle[];
};

const YoutubeList = ({ youtubes }: Props) => {
	return (
		<div className='youtube-lst'>
			<div className='youtube-lst-mini'>빔웍스가 제안하는 혁신적인 솔루션</div>
			<div className='youtube-lst-title'>
				언제 어디에서나 건강한 삶을 위한 솔루션
			</div>
			<div className='youtube-lst-body'>
				{youtubes.map((youtube, index) => (
					<YoutubePlayer key={index} youtube={youtube}></YoutubePlayer>
				))}
			</div>
			<div className={'youtube-lst-visit'}>
				<div className='visit-text'>유튜브 채널 방문하기</div>
				<img src={images.painPlay} className='visit-play' />
			</div>
		</div>
	);
};

export default YoutubeList;
