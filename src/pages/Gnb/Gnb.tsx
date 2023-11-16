import React from 'react';
import './styles/gnb.styles.css';
import images from 'src/assets/images';
import useGnbStore from '@store/zustand/gnbZustand';
import { NavTitle, NavContext } from '@typedef/types';
import { GnbStore } from '@store/zustand/gnbZustand';
type Props = {
	tabs: string[];
	onTabEnter: (index: number) => void;
	onTabLeave: (index: number) => void;
	tabHovered: boolean[];
	onPathClick: (label: string, path: string) => void;
	tab1List: any;
};

const Gnb = ({
	tabs,
	onTabEnter,
	onTabLeave,
	tabHovered,
	onPathClick,
	tab1List,
}: Props) => {
	return (
		<div className='gnb'>
			<img className='gnb-logo' src={images.logo} />
			<div className='gnb-tabs1'>
				{tabs.map((tab, index) => {
					if (index < 3) {
						return (
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
									{index === 0
										? tab1List[index].map((tab: NavTitle, index: number) => (
												<div className='tab' key={index}>
													<div
														className='tab-text'
														onClick={() => {
															onPathClick(tab.title.label, tab.title.path);
														}}
													>
														{tab.title.label}
													</div>
													{index !== 2 ? <div className='tab-divider' /> : ''}
												</div>
										  ))
										: tab1List[index].map((tab: NavContext, index: number) => (
												<div className='tab' key={index}>
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
													{index !== 2 ? <div className='tab-divider' /> : ''}
												</div>
										  ))}
								</div>
							</div>
						);
					}
				})}
			</div>
			<div className='gnb-tabs2'>
				{tabs.map((tab, index) => {
					if (index >= 3) {
						return (
							<div
								className='tabs'
								onMouseEnter={() => {
									onTabEnter(index);
								}}
								onMouseLeave={() => {
									onTabLeave(index);
								}}
							>
								<div>{tab}</div>
							</div>
						);
					}
				})}
			</div>
			<img className='gnb-language' src={images.language} />
		</div>
	);
};

export default Gnb;
