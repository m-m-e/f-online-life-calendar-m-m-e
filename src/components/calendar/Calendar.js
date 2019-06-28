import React from 'react';
import {DayList} from '../dayList/DayList';
import './calendar.scss';

const Calendar = (props) => {
  return (
    <section className="calendar">
      <div className="add__button">+</div>
      <DayList />
    </section>
  );
};

export {Calendar};