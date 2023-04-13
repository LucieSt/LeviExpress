import React, { useState, useEffect } from 'react';
import { SeatRow } from '../SeatRow';
import './style.css';

export const SeatPicker = ({ seats, journeyId, selectedSeat, onSeatSelected }) => {

  return (
    <>
      {/* <div className="selected-seat container">
        <h2>Vaše sedadlo</h2>
        <svg className="seat seat--auto" viewBox="0 0 100 100" role="button">
          <rect className="seat__rect" width="80" height="80" x="14" y="10" rx="15" ry="15" />
          <path className="seat__path" d="M 65,10 H 25 C 5,35 5,65 25,90 H 65" />
          <text className="seat__text" x="55" y="65">26</text>
        </svg>
      </div> */}

      <div className="seat-picker container">
        <h2>Vyberte sedadlo</h2>
        <div className="seats">
          {seats.map((rowData, index) => {
            return <SeatRow key={index} row={rowData} rowSelectedSeat={selectedSeat} onSeatSelected={onSeatSelected}/>
          })}
        </div>
      </div>
    </>
  )
};
