import React from 'react';
import './styles/youtube.styles.css';
import YoutubeBannerContainer from './containers/YoutubeBannerContainer';
import YoutubeListContainer from './containers/YoutubeListContainer';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';

type Props = {};

const Youtube = (props: Props) => {
	return (
		<div className='youtube'>
			<YoutubeBannerContainer />
			<YoutubeListContainer />
			<FooterContainer />
		</div>
	);
};

export default Youtube;
