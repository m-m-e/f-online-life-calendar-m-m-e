import React from 'react';

const Day = (props) => {
  const {day} = props;
  return (
    <li className="day">{day}</li>
  );
};

export {Day};