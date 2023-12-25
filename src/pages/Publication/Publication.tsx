import React from 'react';
import './styles/publication.styles.css';
import PublicationBannerContainer from './containers/PublicationBannerContainer';
import PublicationList from './components/PublicationList';
import PublicationListContainer from './containers/PublicationListContainer';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
type Props = {};

const Publication = ({}: Props) => {
	return (
		<div className='pub'>
			<PublicationBannerContainer />
			<PublicationListContainer />
			<FooterContainer />
		</div>
	);
};

export default Publication;
