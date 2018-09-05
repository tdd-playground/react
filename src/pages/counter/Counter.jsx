import React from 'react';

export default class Counter extends React.PureComponent {
  state={
    counter: 0,
    errorMsg: '',
  };

  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleMsgs = this.handleMsgs.bind(this);
  }

  handleIncrement() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  handleDecrement() {
    this.setState(prevState => ({
      counter: prevState.counter < 1 ? 0 : prevState.counter - 1,
      errorMsg: prevState.counter - 1 < 0 ? 'You cannie go below zero matie' : '',
    }));
  }

  handleMsgs() {
    this.setState(prevState => ({
      errorMsg: prevState.counter - 1 < 0 ? 'You cannie go below zero matie' : '',
    }));
  }

  render() {
    const { counter } = this.state;
    const { errorMsg } = this.state;
    return (
      <div>
        <h1 data-test="counterTitle">Welcome to the Counter Application</h1>
        <div data-test="counterValue">{ counter }</div>
        <div data-test="errorMsg">{ errorMsg }</div>
        <button type="button" data-test="someButtonId" onClick={() => { this.handleIncrement(); this.handleMsgs(); }}>Button Name</button>
        <button type="button" data-test="decrementBtn" onClick={() => { this.handleDecrement(); this.handleMsgs(); }}>Decrement Button</button>
      </div>
    );
  }
}
