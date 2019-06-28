import React from 'react';
import {Day} from '../day/Day';
import './dayList.scss';

const DayList = (props) => {
  const {days} = props;
  return (
    <ul className="day__list">
      {days && days.map(
        (item, index) =>
        <Day day={item} key={index} />
      )}
    </ul>
  );
};

export {DayList};