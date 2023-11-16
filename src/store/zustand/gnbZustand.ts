import create from 'zustand';
import images from 'src/assets/images';
import { NavContext, NavTitle } from '@typedef/types';
export type GnbStore = {
	company: NavTitle[];
	product: NavContext[];
	community: NavContext[];
};
const useGnbStore = create((set) => ({
	company: [
		{
			title: {
				label: '회사소개',
				path: '/introduce',
			},
		},
		{
			title: {
				label: '활동',
				path: '/award',
			},
		},
		{
			title: {
				label: '팀문화',
				path: '/culture',
			},
		},
	],
	product: [
		{
			title: '제품소개',
			context: [
				{
					label: 'CadAI-Series',
					path: '/product',
				},
				{
					label: 'ChatAI-Series',
					path: '/chatai',
				},
			],
		},
		{
			title: 'CadAI-Series',
			context: [
				{
					label: 'CadAI-B',
					path: '/cadb',
				},
				{
					label: 'CadAI-T',
					path: '/cadt',
				},
				{
					label: 'CadAI-R&C',
					path: '/cadr',
				},
			],
		},
		{
			title: 'ChatAI-Series',
			context: [
				{
					label: '응급프로',
					path: '/epro',
				},
				{
					label: '응급이지',
					path: '/eeasy',
				},
				{
					label: '닥터키위',
					path: '/kiwl',
				},
			],
		},
	],
	community: [
		{
			title: 'IR',
			context: [
				{
					label: '재무정보',
					path: '/finance',
				},
				{
					label: 'IR정보',
					path: '/ir',
				},
			],
		},
		{
			title: '뉴스',
			context: [
				{
					label: '보도자료',
					path: '/press',
				},
				{
					label: '연구자료',
					path: '/research',
				},
			],
		},
		{
			title: 'ORCA',
			context: [
				{
					label: 'ORCA 소개',
					path: '/orca',
				},
				{
					label: 'ORCA 바로가기',
					path: 'https://dga4tyl72gqaj.cloudfront.net/',
				},
			],
		},
	],
}));

export default useGnbStore;
