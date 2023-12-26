import React, { useState, useEffect, useCallback } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const PdfViewer = ({ link }) => {
	pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

	const [numPages, setNumPages] = useState(null);
	const [width, setWidth] = useState(window.innerWidth * 0.625); // 62.5vw

	useEffect(() => {
		const updateWidth = () => {
			setWidth(window.innerWidth * 0.625); // Update width state
		};

		window.addEventListener('resize', updateWidth);

		return () => window.removeEventListener('resize', updateWidth);
	}, []);
	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const renderPages = () => {
		const pages = [];
		for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
			pages.push(
				<div key={pageNumber} className='pageContainer'>
					<Page
						key={pageNumber}
						pageNumber={pageNumber}
						width={width}
						renderTextLayer={false}
						renderAnnotationLayer={false}
					/>
				</div>,
			);
		}
		return pages;
	};

	return (
		<Document
			file={link}
			onLoadSuccess={onDocumentLoadSuccess}
			className='document'
		>
			{numPages && renderPages()}
		</Document>
	);
};

export default PdfViewer;
