import React from 'react';
import './App.css';
import Editor from '../editor/Editor';
import {Calendar} from '../calendar/Calendar';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      days: []
    }
  }

  // addMood(event){

  // }
  render(){
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Welcome to the life calendar!</h1>
          <h2 className="subtitle">How was your day?</h2>
        </header>
        <main className="main">
          <Editor />
          <Calendar />
        </main>
        <footer className="footer">
          <p className="footer__text">Megan M Edwards 2019</p>
        </footer>
      </div>
    );
  }
};

export default App;
