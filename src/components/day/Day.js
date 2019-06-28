import React from 'react';
import './day.scss';

const Day = (props) => {
  const {day} = props;
  return (
    <li className="day">
      <div
      className={day === ':)' ? "smiley smiley__good" : "smiley smiley__bad" }>
        {day}
      </div>
    </li>
  );
};

export {Day};