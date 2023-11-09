import React from 'react';
import './styles/gnb.styles.css';
import images from 'src/assets/images';
type Props = {
	tabs: string[];
	onTabEnter: (index: number) => void;
	onTabLeave: (index: number) => void;
	tabHovered: boolean[];
};

const Gnb = ({ tabs, onTabEnter, onTabLeave, tabHovered }: Props) => {
	return (
		<div className='gnb'>
			<img className='gnb-logo' src={images.logo} />
			<div className='gnb-tabs1'>
				{tabs.map((tab, index) => {
					if (index < 3) {
						return (
							<div
								className='tab'
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
									popup1
								</div>
								<div
									className={
										index === 1 && tabHovered[1] ? 'popup2-active' : 'popup1'
									}
								>
									popup2
								</div>
								<div
									className={
										index === 2 && tabHovered[2] ? 'popup2-active' : 'popup1'
									}
								>
									popup3
								</div>
								{/* {index === 0 && tabHovered[0] && (
									<div className='popup1'>popup1</div>
								)}
								{index === 1 && tabHovered[1] && (
									<div className='popup2'>popup2</div>
								)}
								{index === 2 && tabHovered[2] && (
									<div className='popup3'>popup3</div>
								)} */}
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
								className='tab'
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
