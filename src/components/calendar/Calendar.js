import React from 'react';
import {DayList} from '../dayList/DayList';
import './calendar.scss';
import {Link} from 'react-router-dom';
import {Modal} from '../modal/Modal';

const Calendar = (props) => {
  const {days, isModalVisible, showModal, chosenDay, hideModal} = props;
  return (
    <section className="calendar">
      <div className="add__button">
        <Link to="/editor">+</Link>
      </div>
      <DayList days={days} showModal={showModal}/>
      {days.length === 0 && 
        <p className="error">Click the + above to add more days!</p>
      }
      <h3 className="more__info">
        Click on a face for more info about that day!
      </h3>
      <Modal
        isModalVisible={isModalVisible}
        info={chosenDay}
        hideModal={hideModal}
      />
    </section>
  );
};

export {Calendar};