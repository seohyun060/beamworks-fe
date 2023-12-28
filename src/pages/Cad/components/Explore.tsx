import useGnbStore from '@store/zustand/gnbZustand';
import { ExploreType } from '@typedef/types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import images from 'src/assets/images';
type Props = {
	exploreType: ExploreType;
	exploreTexts: string[];
};

const Explore = ({ exploreType, exploreTexts }: Props) => {
	console.log(exploreType.type);
	const { onPathClick } = useGnbStore();
	const navigate = useNavigate();
	return (
		<div
			className={exploreType.type == 'cadb' ? 'product-s8-black' : 'product-s8'}
		>
			<div className='s8-header'>{exploreTexts[0]}</div>
			<div className='s8-body'>
				{exploreType.contents.map((content, index) => (
					<div
						className={`s8-body-box${index + 1}`}
						key={index}
						onClick={() => {
							console.log(content.path);
							onPathClick(content.path, navigate);
						}}
					>
						{exploreType.type === 'chatai' ? (
							<>
								<img className={`s8box-chatai1`} src={content.logo1} />
								<img className='s8box-chatai2' src={content.logo2} />
							</>
						) : (
							<>
								<img className={`s8box-logo`} src={content.logo1} />
								<span className='s8box-text'>{exploreTexts[index + 1]}</span>
							</>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Explore;
