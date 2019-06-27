import React, {Component} from 'react';

class Editor extends Component {
  constructor(props){
    super(props);
    this.state = {
      newMood: {}
    }
    this.updateMood = this.updateMood.bind(this);
  }

  updateMood(event){
    // const current = event.currentTarget;
    // const newObj = {[current.id]: current.value};
    // console.log(newObj);
    // this.setState(prevState => {
    //   const moodToAdd = {...prevState.newMood, newMood: newObj};
    //   return ({newMood: moodToAdd});
    // })
  }

  render(){
    const {updateMood} = this;
    return(
      <section className="editor">
        <form action="" className="form">
          <div className="date__container">
            <label htmlFor="date" className="form__label date__label">
              Date
            </label>
            <input 
              type="date"
              id="date"
              name="currentDate"
              className="input date__input"
              onChange={updateMood}
            />
          </div>
          <div className="mood__container">
            <p className="mood__subtitle">Mood</p>
            <ul className="mood__options">
              <li className="mood__option">
                <input type="radio" id="good" name="mood" value="good" onChange={updateMood}/>
                <label htmlFor="good" className="form__label mood__label">
                  :)
                </label>
              </li>
              <li className="mood__option">
                <input type="radio" id="bad" name="mood" value="bad" onChange={updateMood}/>
                <label htmlFor="bad" className="form__label mood__label">
                  :(
                </label>
              </li>
            </ul>
          </div>
          <div className="message__container">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="2"
              cols="33"
              placeholder="Why was it a good day?"
              onChange={updateMood}
            />
          </div>
          <div className="actions">
            <button type="button" className="button save">Save</button>
            <button type="button" className="button cancel">Cancel</button>
          </div>
        </form>
      </section>
    );
  }
};

export default Editor;