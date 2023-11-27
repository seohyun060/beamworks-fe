import React from 'react';
import CadRS4 from '../components/CadRS4';
import { CadrContent } from '@typedef/types';
type Props = {
	content: CadrContent;
};

const CadRS4Container = ({ content }: Props) => {
	return <CadRS4 content={content} />;
};

export default CadRS4Container;
