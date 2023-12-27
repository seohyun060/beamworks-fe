import React from 'react';
import images from 'src/assets/images';

type Props = {
	selectedTab: string;
	onTabClick: (tab: string) => void;
	tabs: {
		type: string;
		text: string;
	}[];
	techTexts: string[];
};
type SectionProps = {
	title: string;
	cads: string[];
};
const cads = ['CadAI-B', 'CadAI-T', 'CadAI-R&C'];
const SectionComponent: React.FC<SectionProps> = ({ title, cads }) => (
	<>
		<div className='s2m-title'>{title}</div>
		<div className='s2m-more'>
			<span>{title}에 대해 알아보기</span>
			<img src={images.rightB} />
		</div>
		<div className='s2m-body'>
			{cads.map((cad, index) => (
				<div className='vBox' key={index}>
					<div className='vBox-text'>{cad}</div>
				</div>
			))}
		</div>
	</>
);
const HomeTech = ({ selectedTab, onTabClick, tabs, techTexts }: Props) => {
	return (
		<div className='home-s2'>
			<div className='home-s2-container'>
				<div className='home-s2-container-header'>{techTexts[0]}</div>
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
				<div className='s2m'>
					<SectionComponent title='Vision AI' cads={cads} />
					<SectionComponent title='Conversation AI' cads={cads} />
				</div>
			</div>
		</div>
	);
};

export default HomeTech;
