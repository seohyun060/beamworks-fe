import React from 'react';
import './styles/idetail.styles.css';
import PdfViewer from './components/PdfViewer';
import IDetailPdf from './components/IDetailPdf';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
type Props = {
	insightDetail: any;
};

const IDetail = ({ insightDetail }: Props) => {
	return (
		<div className='idetail'>
			<IDetailPdf insightDetail={insightDetail} />
			<FooterContainer />
		</div>
	);
};

export default IDetail;
