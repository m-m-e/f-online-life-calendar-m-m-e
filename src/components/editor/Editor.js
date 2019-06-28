import React, {Component} from 'react';
import './editor.scss';

class Editor extends Component {
  render(){
    const {updateMood, addMood} = this.props;
    return(
      <section className="editor">
        <form action="" className="editor__form">
          <div className="form__container">
            <label htmlFor="date" className="form__label date__label">
              Date
            </label>
            <input 
              type="date"
              id="date"
              name="date"
              className="input date__input"
              onChange={updateMood}
            />
          </div>
          <div className="form__container">
            <p className="mood__subtitle">Mood</p>
            <ul className="mood__options">
              <li className="mood__option">
                <input 
                  type="radio"
                  id="good"
                  name="mood"
                  value="good"
                  className="input mood__input"
                  onChange={updateMood}
                />
                <label htmlFor="good" className="form__label mood__label">
                  :)
                </label>
              </li>
              <li className="mood__option">
                <input 
                  type="radio"
                  id="bad"
                  name="mood"
                  value="bad"
                  className="input mood__input"
                  onChange={updateMood}
                />
                <label htmlFor="bad" className="form__label mood__label">
                  :(
                </label>
              </li>
            </ul>
          </div>
          <div className="form__container">
            <label htmlFor="message" className="form__label">Message</label>
            <textarea
              id="message"
              name="message"
              rows="2"
              cols="33"
              placeholder="Why was it a good day?"
              onChange={updateMood}
              className="input message__input"
            />
          </div>
          <div className="actions">
            <button type="button" className="button button__save" onClick={addMood}>Save</button>
            <button type="button" className="button button__cancel">Cancel</button>
          </div>
        </form>
      </section>
    );
  }
};

export default Editor;