import React from 'react';
import NavigationBar from '../components/NavigationBar';
import FloatingActionButton from '../components/FloatingActionButton';
import MapCard from '../components/MapCard';

const HomePage = () => {
  return (
		<React.Fragment>
			<NavigationBar />
			<MapCard />
			<FloatingActionButton />
		</React.Fragment>
	)
}

export default HomePage;