import { VoidFunc, CadbMode } from '@typedef/types';
import React from 'react';
import images from 'src/assets/images';
type Props = {
	toggle: boolean;
	onToggleClick: VoidFunc;
	modeType: CadbMode;
	modeInfoTexts: string[];
	portrait: boolean;
};

const CadModeInfo = ({
	toggle,
	onToggleClick,
	modeType,
	modeInfoTexts,
	portrait,
}: Props) => {
	console.log(modeType);
	return (
		<div className='cadb-s4'>
			<div className='cadb-s4-cadb'>CadAI-B</div>
			<div className='cadb-s4-header'>{modeInfoTexts[0]}</div>
			<div className='cadb-s4-descript'>
				{modeInfoTexts[1].split('\n').map((line, index) => (
					<React.Fragment key={index}>
						{line}
						<br />
					</React.Fragment>
				))}
			</div>
			{modeType.type === 'realtime' || modeType.type === 'measure' ? (
				<div className='cadb-s4-body'>
					<div className='s4-button'>
						<div className='s4-button-text'>{modeInfoTexts[2]}</div>
						<div className='s4-button-body'>
							<span className='rm-title'>{modeType.button}</span>
							<div
								className={toggle ? 'rm-switch-active' : 'rm-switch'}
								onClick={onToggleClick}
							>
								<span>{toggle ? 'On' : 'Off'}</span>
								<div
									className={
										toggle ? 'rm-switch-active-toggle' : 'rm-switch-toggle'
									}
								></div>
							</div>
						</div>
					</div>
					<img
						className={toggle ? 's4-rmode-active' : 's4-rmode'}
						src={modeType.modeOn}
					/>
					<img className={'s4-rmode-off'} src={modeType.modeOff} />
				</div>
			) : modeType.type === 'freeze' ? (
				<div className='cadb-s4-freeze'>
					<img
						className='s4-fmode'
						src={portrait ? images.freeze1_m : modeType.image1}
					/>
					<img
						className='s4-fmodeb'
						src={portrait ? images.freeze2_m : modeType.image2}
					/>
					<img
						className='s4-fmodec'
						src={portrait ? images.freeze3_m : modeType.image3}
					/>
				</div>
			) : modeType.type === 'setting' ? (
				<div className='cadb-s4-setting'>
					<img
						className='s4-hdmi'
						src={portrait ? images.cadset_m : modeType.image1}
					/>
					<img className='s4-box' src={modeType.image2} />
					<img className='s4-smode' src={modeType.image3} />
				</div>
			) : (
				<div className='cadb-s4-review'>
					<img className='s4-rvmode' src={modeType.image1} />
				</div>
			)}
		</div>
	);
};

export default CadModeInfo;
