import React from 'react';

type Props = {
	selectedTab: string;
	onTabClick: (tab: string) => void;
	tabs: {
		type: string;
		text: string;
	}[];
};

const Section2 = ({ selectedTab, onTabClick, tabs }: Props) => {
	return (
		<div className='home-s2'>
			<div className='home-s2-header'>빔웍스의 기술력</div>
			<div className='home-s2-tabs'>
				{tabs.map((tab, index) => (
					<div
						key={index}
						className={
							selectedTab === tab.type ? `${tab.type}-active` : tab.type
						}
						onClick={() => {
							onTabClick(tab.type);
						}}
					>
						{tab.text}
					</div>
				))}
			</div>
		</div>
	);
};

export default Section2;
