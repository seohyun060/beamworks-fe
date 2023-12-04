import React from 'react';
import Explore from '../components/Explore';
import { ExploreType } from '@typedef/types';
type Props = {
	exploreType: ExploreType;
};

const ExploreContainer = ({ exploreType }: Props) => {
	return <Explore exploreType={exploreType} />;
};

export default ExploreContainer;
