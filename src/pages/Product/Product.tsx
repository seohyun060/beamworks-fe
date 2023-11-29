import React from 'react';
import ProductS1Container from './containers/ProductS1Container';
import ProductS2Container from './containers/ProductS2Container';
import ProductS3Container from './containers/ProductS3Container';
import ProductS4Container from './containers/ProductS4Container';
import ProductS5Container from './containers/ProductS5Container';
import ProductS6Container from './containers/ProductS6Container';
import ProductS7Container from './containers/ProductS7Container';
import ProductS8Container from './containers/ProductS8Container';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import './styles/product.styles.css';
import useProductStore from '@store/zustand/productZustand';
type Props = {};

const Product = (props: Props) => {
	const { cadsExplore, cadaiSolution } = useProductStore();
	return (
		<div className='product'>
			<ProductS1Container />
			<ProductS2Container />
			<ProductS3Container />
			<ProductS4Container />
			<ProductS5Container solution={cadaiSolution} />
			<ProductS6Container />
			<ProductS7Container />
			<ProductS8Container exploreType={cadsExplore} />
			<FooterContainer />
		</div>
	);
};

export default Product;
