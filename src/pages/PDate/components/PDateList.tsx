import React from 'react';

type Props = {
	pDates: any;
};

const PDateList = ({ pDates }: Props) => {
	return (
		<div className='pdate-lst'>
			<div className='pdate-lst-title'>제품 일정</div>
			<div className='pdate-lst-body'>
				{pDates.map((pDate: any, index: number) => (
					<div className='pbox' key={index}>
						<div className='pbox-date'>{pDate.date}</div>
						<div className='pbox-title'>{pDate.title}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PDateList;
