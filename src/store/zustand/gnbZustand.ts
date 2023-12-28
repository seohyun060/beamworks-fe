import { create } from 'zustand';
import images from 'src/assets/images';
import { NavContext, NavTitle, Navigate } from '@typedef/types';
import { useNavigate } from 'react-router-dom';
export type GnbStore = {
	tabs1: string[];
	setTabs1: (tabs: string[]) => void;
	languageCode: string;
	setLanguageCode: (lang: string) => void;
	tabs2: NavTitle[];
	setTabs2: (tabs: NavTitle[]) => void;
	company: NavContext[];
	setCompany: (updatedCompany: NavContext[]) => void;
	product: NavContext[];
	setProduct: (updatedCompany: NavContext[]) => void;
	news: NavContext[];
	setNews: (updatedNews: NavContext[]) => void;
	visit: NavContext[];
	setVisit: (updatedCompany: NavContext[]) => void;
	onPathClick: (path: string, navigate: Navigate) => void;
};

const useGnbStore = create<GnbStore>((set) => ({
	tabs1: ['회사소개', '뉴스', '비전・제품소개', '방문・다운로드'],

	onPathClick: (path: string, navigate: Navigate) => {
		navigate(path);
	},
	setTabs1: (tabs: string[]) => set((state) => ({ ...state, tabs1: tabs })),
	languageCode: 'ko',
	setLanguageCode: (lang: string) =>
		set((state) => ({ ...state, languageCode: lang })),
	tabs2: [
		{
			label: '문의하기',
			path: '/contact',
		},
		{
			label: '채용',
			path: '/recruitment',
		},
	],
	setTabs2: (tabs: NavTitle[]) => set((state) => ({ ...state, tabs2: tabs })),
	///
	company: [
		{
			title: '회사소개',
			context: [
				{
					label: '회사소개',
					path: '/introduce',
				},
				{
					label: '연혁',
					path: '/award',
				},
			],
		},
		{
			title: '팀문화',
			context: [
				{
					label: '팀문화',
					path: '/culture',
				},
				{
					label: '직무소개',
					path: '/jobs',
				},
			],
		},
		{
			title: 'IR',
			context: [
				{
					label: '재무정보',
					path: '/finance',
				},
				{
					label: 'IR 정보',
					path: '/ir',
				},
			],
		},
	],
	setCompany: (updatedCompany: NavContext[]) =>
		set((state) => ({ ...state, company: updatedCompany })),
	news: [
		{
			title: '보도자료',
			context: [
				{
					label: '뉴스・기사',
					path: '/news',
				},
				{
					label: 'Youtube',
					path: '/youtube',
				},
			],
		},
		{
			title: '연구자료',
			context: [
				{
					label: '논문',
					path: '/publication',
				},
				{
					label: 'White paper',
					path: '/white',
				},
			],
		},
		{
			title: '일정',
			context: [
				{
					label: '학회 및 전시',
					path: '/event',
				},
				{
					label: '제품 일정',
					path: '/pdate',
				},
			],
		},
	],
	setNews: (updatedNews: NavContext[]) =>
		set((state) => ({ ...state, news: updatedNews })),
	product: [
		{
			title: '비전소개',
			context: [
				{
					label: 'Vision AI',
					path: '/product',
				},
				{
					label: 'Conversation AI',
					path: '/chatai',
				},
			],
		},
		{
			title: 'Vision AI',
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
			title: 'Conversation AI',
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
	setProduct: (updatedProduct: NavContext[]) =>
		set((state) => ({ ...state, product: updatedProduct })),
	visit: [
		{
			title: 'CadAI-R&C',
			context: [
				{
					label: 'R&C 소개',
					path: '/cadr',
				},
				{
					label: 'R&C 바로가기',
					path: '/cadr',
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
		{
			title: 'Download',
			context: [
				{
					label: 'Vision AI',
					path: '/downv',
				},
				{
					label: 'Conversation AI',
					path: '/downc',
				},
			],
		},
	],
	setVisit: (updatedVisit: NavContext[]) =>
		set((state) => ({ ...state, visit: updatedVisit })),
}));

export default useGnbStore;
