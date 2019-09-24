import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
    this.tick = this.tick.bind(this);
  }  

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="clock">
        <h1>Clock</h1>
        <div className="clock-display">
          <div>
            <p>Time:</p>
            <p>{this.state.date.toLocaleTimeString()}</p>
          </div>
          <div>
            <p>Date:</p>
            <p>{this.state.date.toDateString()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;