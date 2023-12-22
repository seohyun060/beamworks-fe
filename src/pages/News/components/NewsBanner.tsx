import React from 'react';

type Props = {};

const NewsBanner = (props: Props) => {
	return (
		<div className='news-bn'>
			<div className='news-bn-text'>
				세계로 뻗어나가
				<br />
				계속해서 나아가는
				<br />
				빔웍스의 소식을 들어보세요.
			</div>
		</div>
	);
};

export default NewsBanner;
