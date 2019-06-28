import React, {Component} from 'react';
import './editor.scss';
import {Link} from 'react-router-dom'

class Editor extends Component {
  render(){
    const {updateMood, addMood, mood, clearMood, error} = this.props;
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
              value={mood.date ? mood.date : 'dd/mm/yyyy'}
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
                  checked={mood.mood && mood.mood === 'good' ? true : false}
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
                  checked={mood.mood && mood.mood === 'bad' ? true : false}
                />
                <label htmlFor="bad" className="form__label mood__label">
                  :(
                </label>
              </li>
            </ul>
          </div>
          {mood && mood.mood === 'good' &&
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
                value={mood.message}
              />
            </div>
          }
          {mood.date && mood.mood
            ?
            <div className="actions">
              <Link to="/">
                <button
                  type="button"
                  className="button button__save"
                  onClick={addMood}>
                      Save
                </button>
              </Link>
              <button
                type="button"
                className="button button__cancel"
                onClick={clearMood}>
                  <Link to="/">
                    Cancel
                  </Link>
              </button>
            </div>
            :
            <div className="actions">
              <button
                type="button"
                className="button button__save"
                onClick={addMood}>
                  Save
              </button>
              <button
                type="button"
                className="button button__cancel"
                onClick={clearMood}>
                  Cancel
              </button>
            </div>
          }
          {error && <p className="error">Please fill in the date and your mood!</p>}
        </form>
      </section>
    );
  }
};

export default Editor;