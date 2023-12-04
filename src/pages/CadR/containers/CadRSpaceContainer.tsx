import React from 'react';
import CadRSpace from '../components/CadRSpace';
import { CadrContent } from '@typedef/types';
type Props = {
	content: CadrContent;
};

const CadRSpaceContainer = ({ content }: Props) => {
	return <CadRSpace content={content} />;
};

export default CadRSpaceContainer;
