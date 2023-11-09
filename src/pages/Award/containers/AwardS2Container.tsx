import React, { useCallback, useEffect, useState } from 'react';
import AwardS2 from '../components/AwardS2';
type Props = {};

const AwardS2Container = (props: Props) => {
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
	const [selectedHistory, setSelectedHistory] = useState();
	const onYearClick = useCallback(
		(year: number) => {
			setSelectedYear(year);
		},
		[selectedYear],
	);

	const histories = [
		{
			year: 2023,
			achieve: [
				'9월 응급프로 앱 출시',
				'6월 NIA 애자일 공공혁신서비스 개발 산업 선정',
				'5월 범부처전주기의료기기개발 사업 선정(해외 인허가 및 임상시험 지원)',
				'5월 IITP 정보통신·방송 기술개발사업 선정 (목적 맞춤형 생성모델 개발)',
				'2월 GMP 획득',
				'1월 ISO 13485 인증 획득',
			],
		},
		{
			year: 2022,
			achieve: [
				'12월 식약처 혁신의료기기 지정 (제23호 CadAI-B)',
				'11월 기술보증기금 Series A 투자 유치 (20억)',
				'7월 기업부설연구소 설립',
				'7월 GE Edison Developer Program 승인',
				'7월 창업성장기술개발사업 선정',
				'3월 K-메디 소프트웨어 특화사업 선정',
				'3월 중기부 BIG3 혁신 창업패키지 선정',
			],
		},
		{
			year: 2021,
			achieve: [
				'7월 주식회사 빔웍스 창업',
				'4월 바이오 유망기술 글로벌 창업 지원사업(바이오 아이코어 사업)선정',
			],
		},
	];

	return (
		<AwardS2
			selectedYear={selectedYear}
			histories={histories}
			onYearClick={onYearClick}
		/>
	);
};

export default AwardS2Container;
