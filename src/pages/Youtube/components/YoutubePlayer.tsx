import { NavTitle } from '@typedef/types';
import React from 'react';

type Props = {
	youtube: NavTitle;
};

const YoutubePlayer = ({ youtube }: Props) => {
	return (
		<div className='player'>
			<iframe
				//width='100%'
				className='player-frame'
				src={youtube.path}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			></iframe>
			<div className='player-title'>{youtube.label}</div>
		</div>
	);
};

export default YoutubePlayer;
