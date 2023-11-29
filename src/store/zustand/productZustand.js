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
	cadaiSolution: {
		title: 'CadAI-Series',
		solutionList: [
			{
				index: 0,
				problem:
					'초음파 1건당 2만장 이상의 판독을 실시간으로 수행하면서 피로를 느끼지 않았나요?',
				solution:
					'CadAI-Series는 뛰어난 성능과 편의성을 제공하여 업무의 부담을 덜어줄 수 있을 것입니다.',
			},
			{
				index: 1,
				problem: '병변 크기 측정과 Lexicon 결정이 번거롭지 않았나요?',
				solution:
					'CadAI-Series는 뛰어난 성능과 편의성을 제공하여 업무의 부담을 덜어줄 수 있을 것입니다.',
			},
			{
				index: 2,
				problem: '초음파 검사 시 병변 놓치지 않을까 염려가 있었나요?',
				solution:
					'CadAI-Series는 뛰어난 성능과 편의성을 제공하여 업무의 부담을 덜어줄 수 있을 것입니다.',
			},
			{
				index: 3,
				problem:
					'초음파 스캔 시 일부 영역 빠뜨리지 않았는지 헷갈렸던 적 있나요?',
				solution:
					'CadAI-Series는 뛰어난 성능과 편의성을 제공하여 업무의 부담을 덜어줄 수 있을 것입니다.',
			},
		],
		bannerList: [
			images.product5_1,
			images.product5_2,
			images.product5_3,
			images.product5_1,
			images.product5_1,
		],
	},
	// cadaiSolution:
	//[
	// 	{
	// 		index: 0,
	// 		problem:
	// 			'초음파 1건당 2만장 이상의 판독을 실시간으로 수행하면서 피로를 느끼지 않았나요?',
	// 		solution:
	// 			'CadAI-Series는 뛰어난 성능과 편의성을 제공하여 업무의 부담을 덜어줄 수 있을 것입니다.',
	// 	},
	// 	{
	// 		index: 1,
	// 		problem: '병변 크기 측정과 Lexicon 결정이 번거롭지 않았나요?',
	// 		solution:
	// 			'CadAI-Series는 뛰어난 성능과 편의성을 제공하여 업무의 부담을 덜어줄 수 있을 것입니다.',
	// 	},
	// 	{
	// 		index: 2,
	// 		problem: '초음파 검사 시 병변 놓치지 않을까 염려가 있었나요?',
	// 		solution:
	// 			'CadAI-Series는 뛰어난 성능과 편의성을 제공하여 업무의 부담을 덜어줄 수 있을 것입니다.',
	// 	},
	// 	{
	// 		index: 3,
	// 		problem: '초음파 스캔 시 일부 영역 빠뜨리지 않았는지 헷갈렸던 적 있나요?',
	// 		solution:
	// 			'CadAI-Series는 뛰어난 성능과 편의성을 제공하여 업무의 부담을 덜어줄 수 있을 것입니다.',
	// 	},
	// ],
}));

export default useProductStore;
