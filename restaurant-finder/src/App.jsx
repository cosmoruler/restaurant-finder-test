import React, { useEffect } from 'react';
import RestaurantFinder from './components/RestaurantFinder.jsx';
import useUserLocation from './hooks/useUserLocation';
import LocationButton from './LocationButton.jsx';

function App() {
  const userLocation = useUserLocation();

  useEffect(() => {
    if (userLocation) {
      console.log('User location:', userLocation);
      // You can add more logic here to use the location
    }
  }, [userLocation]);

  return (
    <div>
      <LocationButton />
      <h1>Restaurant Finder 🍽️</h1>
      <RestaurantFinder />
      {/* Render nearby results based on userLocation or fallback */}
    </div>
  );
}

export default App;
