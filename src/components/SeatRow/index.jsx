import React, { useState, useEffect } from 'react';
import { Seat } from '../Seat';
import './style.css';

export const SeatRow = ({ row }) => {

  console.log(row);

  return (
    <div className="seat-row">
      <Seat number="9" />
      <Seat number="4" />
      <Seat number="8" />
      <Seat number="4" />
    </div>
  )
};
