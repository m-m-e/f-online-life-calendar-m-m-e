import React from 'react';
import {DayList} from '../dayList/DayList';
import './calendar.scss';

const Calendar = (props) => {
  const {days} = props;
  return (
    <section className="calendar">
      <div className="add__button">+</div>
      <DayList days={days} />
    </section>
  );
};

export {Calendar};