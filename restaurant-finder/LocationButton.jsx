import React, { useState } from 'react';

function LocationButton() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setError(null);
      },
      (err) => {
        setError(`Error: ${err.message}`);
        setLocation(null);
      }
    );
  };

  return (
    <div>
      <button onClick={requestLocation}>Get My Location</button>

      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default LocationButton;
