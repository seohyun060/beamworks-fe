import React from 'react';
import images from 'src/assets/images';
type Props = {
	selectedYear: number;
	histories: {
		year: number;
		achieve: string[];
	}[];
	onYearClick: (year: number) => void;
};

const AwardS2 = ({ selectedYear, histories, onYearClick }: Props) => {
	return (
		<div
			className='award-s2'
			style={{
				backgroundImage:
					selectedYear === 2023
						? `url('/assets/images/awardback2.png')`
						: selectedYear === 2022
						? `url('/assets/images/awardback3.png')`
						: `url('/assets/images/awardback4.png')`,
			}}
		>
			{/* <img src={images.awardback2} /> */}
			<div className='award-s2-header'>빔웍스의 연혁</div>
			<div className='award-s2-body'>
				<div className='award-s2-body-years'>
					{histories.map((history, index) => (
						<div
							className={history.year === selectedYear ? 'year-active' : 'year'}
							key={index}
							onClick={() => {
								onYearClick(history.year);
							}}
						>
							{history.year}
						</div>
					))}
				</div>
				<div className='award-s2-body-achieves'>
					{histories
						.find((history) => history.year === selectedYear)
						?.achieve.map((achieve, index) => (
							<div className='achieve' key={index}>
								{achieve}
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default AwardS2;
