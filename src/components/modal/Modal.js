import React from 'react';
import './modal.scss';

export const Modal = props => {
  const {isModalVisible, info, hideModal} = props;
  return (
    <div
      className=
        {isModalVisible === true 
          ? 
            "modal__visible"
          : 
            "modal__hidden"
        }>
      {info &&
        <div className="modal__content">
          <p className="modal__date">{info.date}</p>
          <p className="modal__mood">{`Today was a ${info.mood} day.`}</p>
          {info.message &&
            <p className="modal__info">{info.message}</p>
          }
        </div>
      }
      <div className="close__modal" onClick={hideModal}>X</div> 
    </div>
  )
}