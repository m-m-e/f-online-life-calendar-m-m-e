import React from 'react';
import {Day} from '../day/Day';

const DayList = (props) => {
  return (
    <ul className="day__list">
      <Day day=":)"/>
      <Day day=":("/>
    </ul>
  );
};

export {DayList};