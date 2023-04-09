import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';

export const Home = () => {

  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyData) => {
    console.log(journeyData);
    setJourney(journeyData);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && (
        <>
          <p>Nalezeno spojení s id {journey.journeyId}</p>
          <JourneyDetail />
        </>
      )}
    </main>
  )
};
