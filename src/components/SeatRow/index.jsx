import React, { useState, useEffect } from 'react';
import { Seat } from '../Seat';
import './style.css';

export const SeatRow = ({ row, rowSelectedSeat }) => {

  // console.log(rowSelectedSeat);
  // let rowSelectedSeat = 24

  return (
    <div className="seat-row">
      {row.map((seat) => {
        return <Seat key={seat.number} number={seat.number} isOccupied={seat.isOccupied} isSelected={rowSelectedSeat === seat.number ? true : false}/>
      })}
    </div>
  )
};
