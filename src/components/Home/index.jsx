import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
import { SeatPicker } from '../SeatPicker';
import './style.css';

export const Home = () => {

  const navigate = useNavigate();
  const [journey, setJourney] = useState(null);
  const [ userSeat, setUserSeat ] = useState(null);

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
  };

  const handleSelect = (number) => {
    setUserSeat(number)
  };

  const handleBuy = () => {

    fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: userSeat,
        journeyId: journey.journeyId,
      }),
    })
    .then(response => response.json())
    .then(data => {
      const reservationId = data.results.reservationId;
      const reservationUrl = `/reservation/${reservationId}`;
      navigate(reservationUrl);
    });
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      
      {journey && (
        <>
          <JourneyDetail journey={journey} />
          <SeatPicker seats={journey.seats} journeyId={journey.journeyId} selectedSeat={userSeat} onSeatSelected={handleSelect}/>
          <div className="controls container btn-container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
          </div>
        </>
      )}
    </main>
  )
};
