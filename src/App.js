import './App.css';
import React from 'react';

import { InitialValues } from './Components/Data/InitialValues';
import TimeToStr from './Components/Utils/TimeToStr';

const audio = document.querySelector("#beep") || null;

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {...InitialValues};
    
    this.interval = null;

    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
  }

  handleBreakDecrement() {
    this.setState(prev => {
      if (prev.break > 1) {
        return ({break: prev.break - 1})
      }
    })
  };

  handleBreakIncrement() {
    this.setState(prev => {
      if (prev.break < 60) {
        return ({break: prev.break + 1})
      }
    })
  };

  handleSessionDecrement() {
    this.setState(prev => {
      if (prev.session > 1) {
        return ({session: prev.session - 1, timer: (prev.session - 1) * 60})
      }
    })
  };

  handleSessionIncrement() {
    this.setState(prev => {
      if (prev.session < 60) {
        return ({session: prev.session + 1, timer: (prev.session + 1) * 60})
      }
    })
  };

  handleStartStop() {
    
      this.setState(prev => {return {timerIsWorking: !prev.timerIsWorking}});
      clearInterval(this.interval);

      if (!this.state.timerIsWorking) {
        this.interval = setInterval(() => {
          this.setState(prev => {

              if (prev.timer > 0) {
                  return({
                      timer: prev.timer - 1
                  });
              }

              else if (prev.timer === 0) {
                  audio.play();
                  return({
                    timer: (prev.currentTimeInterval === 'session') ? prev.break * 60 : prev.session * 60,
                    currentTimeInterval: (prev.currentTimeInterval === 'session') ? 'break' : 'session'
                  });
              }
          });
      }, 1000);
      return () => clearInterval(this.interval);
    }
  }
  

  handleReset() {
    audio.pause();
    audio.currentTime = 0;
    clearInterval(this.interval);
    this.setState({...InitialValues});
  }


  render() {
    return (
      <main>
        <div id="break-label">
          <h3>Break</h3>
          <p id="break-length">{this.state.break}</p>
          <div id="break-btns">
            <button 
              type="button" 
              id="break-decrement" 
              value="brkLess" 
              disabled={this.state.timerIsWorking}
              onClick={this.handleBreakDecrement}
              >{this.state.decr}</button>
            <button 
              type="button" 
              id="break-increment" 
              value="brkGrtr" 
              disabled={this.state.timerIsWorking}
              onClick={this.handleBreakIncrement}
              >{this.state.incr}</button>
          </div>
        </div>
        <div id="session-label">
          <h3>Session</h3>
          <p id="session-length">{this.state.session}</p>
          <div id="session-btns">
            <button 
              type="button" 
              id="session-decrement" 
              value="ssnLess" 
              disabled={this.state.timerIsWorking}
              onClick={this.handleSessionDecrement}
              >{this.state.decr}</button>
            <button 
              type="button" 
              id="session-increment" 
              value="ssnGrtr" 
              disabled={this.state.timerIsWorking}
              onClick={this.handleSessionIncrement}
              >{this.state.incr}</button>
          </div>
        </div>
        <div id="timer-label">
          <h3>{this.state.currentTimeInterval[0].toUpperCase() + this.state.currentTimeInterval.slice(1)}</h3>
          <p id="time-left">{TimeToStr(this.state.timer)}</p>
          <div id="timer-btns">
            <button 
              type="button" 
              id="start_stop" 
              value={this.state.timerIsWorking ? "stop" : "start"} 
              onClick={this.handleStartStop}
              >{this.state.timerIsWorking ? "Pause / Stop" : "Start"}</button>
            <button 
              type="button" 
              id="reset" 
              value="reset" 
              onClick={this.handleReset}
              >Reset</button>
          </div>
        </div>
      </main>
    )
  }
}
