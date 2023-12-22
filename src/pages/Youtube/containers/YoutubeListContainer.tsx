import React from 'react';
import YoutubeList from '../components/YoutubeList';
import { NavTitle } from '@typedef/types';
type Props = {};

const youtubes: NavTitle[] = [
	{
		label: '빔웍스 BeamWorks',
		path: 'https://www.youtube.com/embed/jAV6BhF566s',
	},
	{
		label: '[CadAI-B] 제품 소개 영상(한글)',
		path: 'https://www.youtube.com/embed/PsEbpwXFm2w',
	},
	{
		label: '대화형 AI 의료 플랫폼, ChatAI-Series (한글)',
		path: 'https://www.youtube.com/embed/AD2zJVORcSg',
	},
];

const YoutubeListContainer = (props: Props) => {
	return <YoutubeList youtubes={youtubes} />;
};

export default YoutubeListContainer;
