import React, { Component, Fragment } from 'react';
import './Hello.css';

class Hello extends Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Can you see me now?</h1>
        <div>Hello World!</div>
        <Fragment>welcome to react {this.props.greeting}</Fragment>
      </div>
    );
  }
}

export default Hello;
