import React from 'react';

export default class SamplePage extends React.PureComponent {
  state={
    counter: 0,
  };

  constructor(props) {
    super(props);
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>Welcome to the Counter Application</h1>
        <div>{ counter }</div>
        <button type="button" id="someButtonId" onClick={this.handleClickEvent}>Button Name</button>
      </div>
    );
  }
}
