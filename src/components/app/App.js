import React from 'react';
import './App.scss';
import Editor from '../editor/Editor';
import {Calendar} from '../calendar/Calendar';
import {saveData} from '../../services/Helpers';
import {Route,Switch} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newMood: {},
      days: [],
      isError: false,
      isModalVisible: false,
      chosenDay: {}
    }
    this.updateMood = this.updateMood.bind(this);
    this.addMood = this.addMood.bind(this);
    this.clearMood = this.clearMood.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount(){
    const newData = JSON.parse(localStorage.getItem('previousDays')) || [];
    this.setState({days: newData});
  }

  clearMood(){
    this.setState({newMood: {}});
  }

  updateMood(event){
    const current = event.currentTarget;
    this.setState(prevState => {
      const mood = {...prevState.newMood, [current.name]: current.value};
      return {newMood: mood};
    })
  }
  
  addMood(event){
    const {newMood: mood, days} = this.state;
    const previous = days.find(element => element.date === mood.date);
      if (Object.keys(mood).length >= 2 && previous.date !== mood.date){
      this.setState(prevState => {
        const dayToAdd = {...prevState.newMood};
        const currentDays = [...prevState.days];
        currentDays.push(dayToAdd);
        saveData('previousDays', currentDays);
        return {days: currentDays, isError: false};
      })
      this.clearMood();
    } else {
      this.setState({isError: true});
    }
  }

  showModal(event){
    const { days } = this.state;
    const current = event.currentTarget;
    let chosenDayInfo = days.find(element => element.date === current.title);
    this.setState({isModalVisible: true, chosenDay: chosenDayInfo})
  }

  hideModal(){
    this.setState({isModalVisible: false, chosenDay: {}})
  }

  render(){
    const {newMood, days, isError, isModalVisible, chosenDay} = this.state;
    const {updateMood, addMood, clearMood, showModal, hideModal} = this;
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
            <Switch>
              <Route exact path="/" render={ () => (
                <Calendar 
                  days={days}
                  isModalVisible={isModalVisible}
                  showModal={showModal}
                  chosenDay={chosenDay}
                  hideModal={hideModal}
                />
              )}/>
              <Route path="/editor" render={ () => (
                <Editor
                updateMood={updateMood}
                addMood={addMood}
                mood={newMood}
                clearMood={clearMood}
                error={isError}
                />
              )}/>
            </Switch>
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
