import { create } from 'zustand';
import images from 'src/assets/images';
const useCadrStore = create((set) => ({
	community: {
		type: 'cm',
		header: '의사들만의 커뮤니티 공간',
		body: 'CadAI-B는 유방 초음파 검사에서 의사의 오른팔 역할을 하는 프로그램입니다. 실시간으로 병변을 발견하고, 의사에게 협력하여 유용한 정보를 제공하여 진단 과정을 효율적으로 지원합니다.',
		img1: images.cadr_cm1,
		img2: images.cadr_cm2,
		backImg: images.cadr_cmb,
	},
	contents: {
		type: 'ct',
		header: '뉴스들을 한눈에',
		body: 'CadAI-B는 유방 초음파 검사에서 의사의 오른팔 역할을 하는 프로그램입니다. 실시간으로 병변을 발견하고, 의사에게 협력하여 유용한 정보를 제공하여 진단 과정을 효율적으로 지원합니다.',
		img1: images.cadr_ct1,
		img2: images.cadr_ct2,
		backImg: images.cadr_ctb,
	},
	report: {
		type: 'rp',
		header: 'CadAI의 리포트 공간',
		body: 'CadAI-B는 유방 초음파 검사에서 의사의 오른팔 역할을 하는 프로그램입니다. 실시간으로 병변을 발견하고, 의사에게 협력하여 유용한 정보를 제공하여 진단 과정을 효율적으로 지원합니다.',
		img1: images.cadr_rp,
		img2: '',
		backImg: images.cadr_rpb,
	},
}));

export default useCadrStore;
