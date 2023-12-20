import React from 'react';
import images from 'src/assets/images';
type Props = {
	playList: {
		playing: boolean;
		content: string;
	}[];
	onPlayClick: (index: number) => void;
	videoTexts: string[];
};

const EeasyVideo = ({ playList, onPlayClick, videoTexts }: Props) => {
	return (
		<div className='eeasy-s6'>
			<img className='eeasy-s6-mobile' src={images.eeasy6_mobile} />
			<div className='eeasy-s6-text'>
				<div className='s6-header'>{videoTexts[0]}</div>
				<div
					className='s6-body'
					dangerouslySetInnerHTML={{ __html: videoTexts[1] }}
				></div>
				<div className='s6-play'>
					{playList.map((play, index) => (
						<div
							key={index}
							className={play.playing ? 's6-play-box-active' : 's6-play-box'}
							onClick={() => {
								onPlayClick(index);
							}}
						>
							<img src={play.content} className='play-content' />
							<img src={images.painPlay} className='play-button' />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default EeasyVideo;
