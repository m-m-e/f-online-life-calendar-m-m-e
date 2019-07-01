import React from 'react';
import {Day} from '../day/Day';
import './dayList.scss';

const DayList = (props) => {
  const {days, showModal} = props;
  return (
    <ul className="day__list">
      {days && days.map(
        (item, index) =>
        <Day 
          day={item}
          key={index}
          showModal={showModal}
        />
      )}
    </ul>
  );
};

export {DayList};