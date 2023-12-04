import React from 'react';

type Props = {
	selectedTab: string;
	onTabClick: (tab: string) => void;
	tabs: {
		type: string;
		text: string;
	}[];
};

const HomeTech = ({ selectedTab, onTabClick, tabs }: Props) => {
	return (
		<div className='home-s2'>
			<div className='home-s2-container'>
				<div className='home-s2-container-header'>빔웍스의 기술력</div>
				<div className='home-s2-container-tabs'>
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
				<div className='home-s2-container-body'></div>
			</div>
		</div>
	);
};

export default HomeTech;
