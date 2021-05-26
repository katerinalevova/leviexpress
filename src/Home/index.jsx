import React from 'react';
import JourneyPicker from './JourneyPicker/index';
import { useState } from 'react';

const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
    console.log(`Nalezeno spojení s id: ${journey}`);
  };

  return (
    <>
      <h2>Home</h2>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
    </>
  );
};

export default Home;
