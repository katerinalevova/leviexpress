import React, { useEffect } from 'react';
import JourneyPicker from './JourneyPicker/index';
import JourneyDetail from './JourneyDetail/index';
import { useState } from 'react';

const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  return (
    <>
      <h2>Home</h2>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey !== null ? `Nalezeno spojení s id: ${journey}` : ''};
    </>
  );
};

export default Home;
