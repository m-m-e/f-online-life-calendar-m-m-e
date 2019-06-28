import React from 'react';
import './App.scss';
import Editor from '../editor/Editor';
import {Calendar} from '../calendar/Calendar';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newMood: {},
      days: []
    }
    this.updateMood = this.updateMood.bind(this);
    this.addMood = this.addMood.bind(this);
  }
  updateMood(event){
    const current = event.currentTarget;
    this.setState(prevState => {
      const mood = {...prevState.newMood, [current.name]: current.value};
      return {newMood: mood};
    })
  }

  addMood(event){
    this.setState(prevState => {
      const dayToAdd = {...prevState.newMood};
      const currentDays = [...prevState.days];
      currentDays.push(dayToAdd);
      return {days: currentDays};
    })
  }

  render(){
    const {updateMood, addMood} = this;
    return (
      <div className="app">
        <header className="header">
          <div className="wrapper header__wrapper">
            <h1 className="title">Welcome to the life calendar!</h1>
            <h2 className="subtitle">How was your day?</h2>
          </div>
        </header>
        <main className="main">
          <div className="wrapper main__wrapper">
            <Editor updateMood={updateMood} addMood={addMood}/>
            <Calendar />
          </div>
        </main>
        <footer className="footer">
          <p className="footer__text">Megan M Edwards 2019</p>
        </footer>
      </div>
    );
  }
};

export default App;
