import create from 'zustand';
import images from 'src/assets/images';
const useCadbStore = create((set) => ({
	rmode: {
		type: 'realtime',
		title: 'Realtime-mode',
		descript:
			'Realtime mode는 초음파 검사시에 실시간으로 보여지는 화면입니다.\nCadAI-map을 활용하여 더 편리하고 더 빠르게 병변을 진단하세요.\nCadAI-map은 어떤 모드에서든 쉽게 끄고 켤 수 있습니다.',
		button: 'CadAI-map',
		modeOff: images.rmode_off,
		modeOn: images.rmode_on,
		image1: '',
		image2: '',
		image3: '',
	},
	mmode: {
		type: 'measure',
		title: 'Measure-mode',
		descript:
			'더 자세한 병변의 상태를 알고싶다면, Measure mode를 이용하세요.\n상세한 Lexicon의 정보를 알려줍니다.',
		button: 'Measure',
		modeOff: images.mmode_off,
		modeOn: images.mmode_on,
		image1: '',
		image2: '',
		image3: '',
	},
	fmode: {
		type: 'freeze',
		title: 'Freeze-mode',
		descript:
			'병변을 찾으셨다면 초음파 기기의 Freeze를 누르세요.\nCadAI (캐디)가 병변의 Area와 BI-RADS를 제공합니다.\n또한, Smart check를 통해 스캔한 영역을 표시해줍니다.',
		button: '',
		modeOff: '',
		modeOn: '',
		image1: images.fmode,
		image2: images.fmode_b,
		image3: images.fmode_c,
	},
	smode: {
		type: 'setting',
		title: '제품 설치 환경',
		descript:
			'CadAI-B는 Surpace go를 지원합니다.\n초음파 기계와 태블릿을 연결하는데에는\n선 하나와 Capture Box 만 있으면 가능합니다.',
		button: '',
		modeOff: '',
		modeOn: '',
		image1: images.hdmi,
		image2: images.smode_box,
		image3: images.smode,
	},
	rvmode: {
		type: 'review',
		title: 'Review-mode',
		descript:
			'Review mode는 초음파 검사가 끝나고 저장된 화면을 다시 볼 수 있습니다.\n조작법은 크게 어렵지 않으며 단지 몇번의 클릭만 하면 됩니다.\n병변에 대한 정보 수정은 R&C 홈페이지에서 가능합니다.',
		button: '',
		modeOff: '',
		modeOn: '',
		image1: images.rvmode,
		image2: '',
		image3: '',
	},
}));

export default useCadbStore;
