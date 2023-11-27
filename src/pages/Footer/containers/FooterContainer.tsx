import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';
type Props = {};

const FooterContainer = (props: Props) => {
	const location = useLocation();
	console.log(location.pathname);
	const [type, setType] = useState('');
	useEffect(() => {
		if (location.pathname === '/cadb' || location.pathname === '/cadr') {
			setType('black');
		} else {
			setType('');
		}
		return () => {};
	}, [location]);

	return <Footer type={type} />;
};

export default FooterContainer;
