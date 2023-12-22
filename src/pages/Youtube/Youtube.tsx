import React from 'react';
import './styles/youtube.styles.css';
import YoutubeBannerContainer from './containers/YoutubeBannerContainer';
import YoutubeListContainer from './containers/YoutubeListContainer';

type Props = {};

const Youtube = (props: Props) => {
	return (
		<div className='youtube'>
			<YoutubeBannerContainer />
			<YoutubeListContainer />
		</div>
	);
};

export default Youtube;
