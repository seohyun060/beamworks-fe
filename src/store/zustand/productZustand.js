import create from 'zustand';
import images from 'src/assets/images';
import { solvingTextsKo } from 'src/lang/CadTexts';
const useProductStore = create((set, get) => ({
	selectedSolution: 0,
	setSelectedSolution: (solution) => set({ selectedSolution: solution }),
	toggle: false,
	setToggle1: () =>
		set((state) => ({
			toggle: !state.toggle, // state를 이용하여 state 값 변경
		})),
	setToggle2: () =>
		set({
			toggle: !get().toggle, // get을 이용하여 state 값 변경
		}),
	cadsExplore: {
		type: 'cads',
		title: 'Vision AI 둘러보기',

		contents: [
			{
				logo1: images.cadb_b,
				logo2: '',
				text: '(유방)',
				background: '',
				path: '/cadb',
			},
			{
				logo1: images.cadt_b,
				logo2: '',
				text: '(갑상선)',
				background: '',
				path: '/cadt',
			},
			{
				logo1: images.cadr_b,
				logo2: '',
				text: '',
				background: '',
				path: '/cadr',
			},
		],
	},
	chataiExplore: {
		type: 'chatai',
		title: 'Conversation AI 둘러보기',
		contents: [
			{
				logo1: images.ecross,
				logo2: images.epro,
				text: '',
				background: '',
				path: '/epro',
			},
			{
				logo1: images.ecross,
				logo2: images.eeasy,
				text: '',
				background: '',
				path: '/eeasy',
			},
			{
				logo1: images.kiwilogo,
				logo2: '',
				text: '',
				background: '',
				path: '/kiwi',
			},
		],
	},
	cadbExplore: {
		type: 'cadb',
		title: 'Vision AI 둘러보기',
		contents: [
			{
				logo1: images.cadb_b,
				logo2: '',
				text: '(유방)',
				background: '',
				path: '/cadb',
			},
			{
				logo1: images.cadt_b,
				logo2: '',
				text: '(갑상선)',
				background: '',
				path: '/cadt',
			},
			{
				logo1: images.cadr_b,
				logo2: '',
				text: '',
				background: '',
				path: '/cadr',
			},
		],
	},
	cadaiSolution: {
		type: 'cadai',
		title: 'CadAI-Series',
		solutionList: Array.from({ length: 4 }, () => ({
			problem: '',
			solution: '',
		})),
		bannerList: [
			images.product5_2,
			images.product5_3,
			images.product5_1,
			images.product5_1,
			images.product5_1,
		],
	},
	setCadaiSolution: (updatedSolution) =>
		set((state) => ({ ...state, cadaiSolution: updatedSolution })),
	eeasySolution: {
		type: 'eeasy',
		title: '응급이지',
		solutionList: Array.from({ length: 4 }, () => ({
			problem: '',
			solution: '',
		})),
		bannerList: [
			images.easysol1,
			images.easysol2,
			images.easysol3,
			images.easysol4,
			images.easysol0,
		],
	},
	setEeasySolution: (updatedSolution) =>
		set((state) => ({ ...state, eeasySolution: updatedSolution })),

	portrait: false,
	setPortrait: (updatedPortrait) =>
		set((state) => ({ ...state, portrait: updatedPortrait })),
	handleResize: () => {
		if (window.innerWidth > window.innerHeight) {
			set((state) => ({ ...state, portrait: false }));
		} else {
			set((state) => ({ ...state, portrait: true }));
		}
	},
}));

export default useProductStore;
