import React, { useEffect } from 'react';
import JourneyPicker from './JourneyPicker/index';
import JourneyDetail from './JourneyDetail/index';
import { useState } from 'react';

const Home = () => {
  const [journey, setJourney] = useState(null);
  // useEffect(() => {
  //   console.log(journey);
  //   if (journey !== 'null') {
  //     return (
  //       <>
  //         <JourneyDetail />
  //       </>
  //     );
  //   } else {
  //     return console.log(journey);
  //   }
  // }, []);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
    console.log(`Nalezeno spojení s id: ${journey}`);
    if (journey !== null) {
      return <JourneyDetail />;
    } else {
      return console.log(journey);
    }
  };

  return (
    <>
      <h2>Home</h2>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
    </>
  );
};

export default Home;
