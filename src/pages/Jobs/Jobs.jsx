import React from 'react';

import JobsMain from './components/JobsMain';
import JobsJob from './components/JobsJob';
import JobsInternship from './components/JobsInternship';
import Footer from 'src/pages/Footer/Footer';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';

const Jobs = () => {
	return (
		<div className='Jobs'>
			{/* 첫번쨰 화면 */}
			<JobsMain />
			{/* 주요 직무 */}
			<JobsJob />
			{/* 인턴쉽 지원 */}
			<JobsInternship />
			{/* 뉴스레터 구독 */}
			<FooterContainer />
		</div>
	);
};

export default Jobs;
