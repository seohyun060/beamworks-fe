import React from 'react';
import images from 'src/assets/images';
type Props = {
	playList: {
		playing: boolean;
		content: string;
	}[];
	onPlayClick: (index: number) => void;
};

const EeasyS6 = ({ playList, onPlayClick }: Props) => {
	return (
		<div className='eeasy-s6'>
			<img className='eeasy-s6-mobile' src={images.eeasy6_mobile} />
			<div className='eeasy-s6-text'>
				<div className='s6-header'>증상에 대한 해결방법 제공</div>
				<div className='s6-body'>
					증상에 대한 결과를 토대로 하여 거리순에 따른{' '}
					<span>최적 병원리스트</span>와 병원 내 잔여 병상에 대한 정보, 그리고
					<span> 응급처치에 대한 안내</span>를 제공합니다.
					<br />
					<br /> 또한 나의 분류 리스트에서 지금까지의 자가 분류를 다시 볼 수
					있습니다.
				</div>
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

export default EeasyS6;
