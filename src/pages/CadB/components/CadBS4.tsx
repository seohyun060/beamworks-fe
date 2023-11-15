import { VoidFunc } from '@typedef/types';
import React from 'react';
import images from 'src/assets/images';
type Props = {
	toggle: boolean;
	onToggleClick: VoidFunc;
};

const CadBS4 = ({ toggle, onToggleClick }: Props) => {
	return (
		<div className='cadb-s4'>
			<div className='cadb-s4-cadb'>CadAI-B</div>
			<div className='cadb-s4-header'>Realtime-mode</div>
			<div className='cadb-s4-descript'>
				Realtime mode는 초음파 검사시에 실시간으로 보여지는 화면입니다.
				CadAI-map을 활용하여 더 편리하고 더 빠르게 병변을 진단하세요.
				CadAI-map은 어떤 모드에서든 쉽게 끄고 켤 수 있습니다.
			</div>
			<div className='cadb-s4-body'>
				<div className='s4-button'>
					<div className='s4-button-text'>직접 켜보세요</div>
					<div className='s4-button-body'>
						<span className='rm-title'>CadAI-map</span>
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
					src={images.rmode_on}
				/>
				<img className={'s4-rmode-off'} src={images.rmode_off} />
			</div>
		</div>
	);
};

export default CadBS4;
