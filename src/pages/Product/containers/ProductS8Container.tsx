import React from 'react';
import ProductS8 from '../components/ProductS8';
import { Explore } from '@typedef/types';
type Props = {
	exploreType: Explore;
};

const ProductS8Container = ({ exploreType }: Props) => {
	return <ProductS8 exploreType={exploreType} />;
};

export default ProductS8Container;
