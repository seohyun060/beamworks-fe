import React from 'react';
import './styles/gnb.styles.css';
import images from 'src/assets/images';
import useGnbStore from '@store/zustand/gnbZustand';
import { NavTitle, NavContext } from '@typedef/types';
import { GnbStore } from '@store/zustand/gnbZustand';
type Props = {
	onTabEnter: (index: number) => void;
	onTabLeave: (index: number) => void;
	tabHovered: boolean[];
	onPathClick: (label: string, path: string) => void;
	tab1List: any;
	tabs1: string[];
	tabs2: {
		label: string;
		path: string;
	}[];
	globeToggle: boolean;
	onGlobeClicked: VoidFunction;
	languages: {
		text: string;
		code: string;
	}[];
};

const Gnb = ({
	onTabEnter,
	onTabLeave,
	tabHovered,
	onPathClick,
	tab1List,
	tabs1,
	tabs2,
	globeToggle,
	onGlobeClicked,
	languages,
}: Props) => {
	const { setLanguageCode } = useGnbStore();
	console.log(tab1List[3]);
	return (
		<div className='gnb'>
			<img
				className='gnb-logo'
				src={images.logo}
				onClick={() => {
					onPathClick('', '/');
				}}
			/>
			<div className='gnb-tabs1'>
				{tabs1.map((tab, index) => (
					<div
						className='tabs'
						key={index}
						onMouseEnter={() => {
							onTabEnter(index);
						}}
						onMouseLeave={() => {
							onTabLeave(index);
						}}
					>
						<div>{tab}</div>
						<img src={tabHovered[index] ? images.upW : images.downW} />
						<div
							className={
								tabHovered[index]
									? `popup${index + 1}-active`
									: `popup${index + 1}`
							}
						>
							{tab1List[index].map((tab: NavContext, idx: number) => (
								<div className='tab' key={idx}>
									<div className='tab-text'>
										<div className='tab-text-title'>{tab.title}</div>
										{tab.context.map((sub, index) => (
											<div
												className='tab-text-sub'
												key={index}
												onClick={() => {
													onPathClick(sub.label, sub.path);
												}}
											>
												{sub.label}
											</div>
										))}
									</div>
									{idx !== tab1List[index].length - 1 ? (
										<div className='tab-divider' />
									) : (
										''
									)}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<div className='gnb-tabs2'>
				{tabs2.map((tab, index) => (
					<div
						className='tabs'
						key={index}
						onClick={() => {
							onPathClick(tab.label, tab.path);
						}}
					>
						<div>{tab.label}</div>
					</div>
				))}
			</div>
			<img
				className='gnb-language'
				src={images.language}
				onClick={onGlobeClicked}
			></img>
			<div className={globeToggle ? `popup5-active` : `popup5`}>
				{languages.map((language, index) => (
					<div
						className='tabs'
						key={index}
						onClick={() => {
							setLanguageCode(language.code);
							onGlobeClicked();
						}}
					>
						<div>{language.text}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Gnb;
