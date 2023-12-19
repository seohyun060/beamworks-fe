import React from 'react';
import images from 'src/assets/images';
type Props = {
	selectedYear: number;
	histories: {
		year: number;
		achieve: string[];
	}[];
	onYearClick: (year: number) => void;
	headerText: string[];
};

const AwardHistory = ({
	selectedYear,
	histories,
	onYearClick,
	headerText,
}: Props) => {
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
				transition: '0.3s ease-in-out',
			}}
		>
			{/* <img src={images.awardback2} /> */}
			<div className='award-s2-header'>{headerText[0]}</div>
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
					{histories.map((history, index) =>
						history.achieve.map((achieve, index) => (
							<div
								className={
									history.year === selectedYear ? 'achieve-active' : 'achieve'
								}
								key={index}
							>
								{achieve}
							</div>
						)),
					)}
				</div>
			</div>
		</div>
	);
};

export default AwardHistory;
