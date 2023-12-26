import React, { useCallback } from 'react';
import PdfViewer from './PdfViewer';
import images from 'src/assets/images';
import { useNavigate } from 'react-router-dom';

type Props = {
	insightDetail: any;
};

const IDetailPdf = ({ insightDetail }: Props) => {
	const navigate = useNavigate();
	const onBackClick = useCallback(async () => {
		navigate(-1);
	}, []);
	return (
		<div className='idetail-pdf'>
			<div className='idetail-pdf-back' onClick={() => onBackClick()}>
				<img src={images.leftB} />
				<div>{'Back'}</div>
			</div>
			<div className='idetail-pdf-title'>{insightDetail.title}</div>
			<div className='idetail-pdf-type'>{insightDetail.type}</div>
			<div className='idetail-pdf-date'>{insightDetail.date}</div>
			<PdfViewer link={insightDetail.link} />
		</div>
	);
};

export default IDetailPdf;
