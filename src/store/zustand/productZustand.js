import create from 'zustand';
import images from 'src/assets/images';
const useProductStore = create((set, get) => ({
	selectedSolution: -1,
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
		title: 'CadAI-Series 둘러보기',
		contents: [
			{
				logo1: images.cadb_b,
				logo2: '',
				text: '(유방)',
				background: '',
			},
			{
				logo1: images.cadt_b,
				logo2: '',
				text: '(갑상선)',
				background: '',
			},
			{
				logo1: images.cadr_b,
				logo2: '',
				text: '',
				background: '',
			},
		],
	},
	chataiExplore: {
		type: 'chatai',
		title: 'ChatAI-Series 둘러보기',
		contents: [
			{
				logo1: images.ecross,
				logo2: images.epro,
				text: '',
				background: '',
			},
			{
				logo1: images.ecross,
				logo2: images.eeasy,
				text: '',
				background: '',
			},
			{
				logo1: images.kiwilogo,
				logo2: '',
				text: '',
				background: '',
			},
		],
	},
	cadbExplore: {
		type: 'cadb',
		title: 'CadAI-Series 둘러보기',
		contents: [
			{
				logo1: images.cadb_b,
				logo2: '',
				text: '(유방)',
				background: '',
			},
			{
				logo1: images.cadt_b,
				logo2: '',
				text: '(갑상선)',
				background: '',
			},
			{
				logo1: images.cadr_b,
				logo2: '',
				text: '',
				background: '',
			},
		],
	},
}));

export default useProductStore;
