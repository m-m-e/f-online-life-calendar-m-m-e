import React from 'react';
import {DayList} from '../dayList/DayList';
import './calendar.scss';
import {Link} from 'react-router-dom';

const Calendar = (props) => {
  const {days} = props;
  return (
    <section className="calendar">
      <div className="add__button">
        <Link to="/editor">+</Link>
      </div>
      <DayList days={days} />
      {days.length === 0 && 
        <p className="error">Click the + above to add more days!</p>
      }
    </section>
  );
};

export {Calendar};