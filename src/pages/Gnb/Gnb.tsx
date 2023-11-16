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
};

const Gnb = ({
	tabs,
	onTabEnter,
	onTabLeave,
	tabHovered,
	onPathClick,
}: Props) => {
	const { company, product, community } = useGnbStore() as GnbStore;
	console.log(company);
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
										index === 0 && tabHovered[0] ? 'popup1-active' : 'popup1'
									}
								>
									{company.map((tab, index) => (
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
									))}
								</div>
								<div
									className={
										index === 1 && tabHovered[1] ? 'popup2-active' : 'popup2'
									}
								>
									{product.map((tab, index) => (
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
								<div
									className={
										index === 2 && tabHovered[2] ? 'popup3-active' : 'popup3'
									}
								>
									{community.map((tab, index) => (
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
