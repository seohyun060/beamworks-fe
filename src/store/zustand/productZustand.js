import create from 'zustand';
import images from 'src/assets/images';
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
			images.product5_2,
			images.product5_3,
			images.product5_1,
			images.product5_1,
			images.product5_1,
		],
	},
	eeasySolution: {
		title: '응급이지',
		solutionList: [
			{
				index: 0,
				problem:
					'갑작스러운 상황에서 적절한 응급처치의 방법을 정확히 알고계신가요?',
				solution:
					'응급이지는 갑작스러운 상황에 대비하여 적절한 응급 처치 방법을 제공합니다.',
			},
			{
				index: 1,
				problem:
					'자녀가 갑자기 열이 날 때 의사 상담이 필요한 경우가 있으신가요?',
				solution:
					'응급이지는 다양한 증상에 대한 효과적인 응급 처치와 의사 상담 방법을 안내하여 부모들이 안전한 선택을 할 수 있도록 지원합니다.',
			},
			{
				index: 2,
				problem:
					'급속한 증상 악화 시에 응급실에서 오래동안 대기하신 적이 있으신가요?',
				solution:
					'응급이지는 급한 증상을 판별하고 즉각적인 대처를 안내하여 응급실 대기 시간을 최소화 합니다.',
			},
			{
				index: 3,
				problem:
					'응급실에서 대기중에 혼잡한 상황에 대해 불편함을 느끼신 적이 있으신가요?',
				solution:
					'응급이지는 경증을 가진 사람들이 적절한 병원을 찾아가도록 안내하여 응급실 혼잡을 줄이고 빠른 응급 서비스를 제공합니다.',
			},
		],
		bannerList: [
			images.easysol1,
			images.easysol2,
			images.easysol3,
			images.easysol4,
			images.easysol0,
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
