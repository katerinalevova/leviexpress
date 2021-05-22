import React from 'react';
import JourneyPicker from './JourneyPicker/index';

const Home = () => {
  const handleJourneyChange = () => {};

  return (
    <>
      <h2>Home</h2>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
    </>
  );
};

export default Home;
