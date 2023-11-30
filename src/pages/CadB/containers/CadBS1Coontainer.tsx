import React from 'react';
import CadBS1 from '../components/CadBS1';
type Props = {
	scrollPosition: number;
};

const CadBS1Coontainer = ({ scrollPosition }: Props) => {
	console.log(scrollPosition, 'dfdfdf');
	return <CadBS1 scrollPosition={scrollPosition} />;
};

export default CadBS1Coontainer;
