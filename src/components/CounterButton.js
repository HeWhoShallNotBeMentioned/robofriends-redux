import React, { Component } from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);

    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  updateCount = () => {
    this.setState((state) => {
      return { count: this.state.count + 1 };
    });
  };

  render() {
    console.log('CounterButtom Component');
    console.log('props', this.props.color);
    return (
      <button
        style={{ color: this.props.color, backgroundColor: '#F8F8FF' }}
        onClick={this.updateCount}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
