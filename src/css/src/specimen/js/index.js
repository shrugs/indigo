import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class WelcomePage extends Component {
  render() {
    return (
      <div>
        <h1>Happy Javascripting!</h1>
      </div>
    )
  }
}

ReactDOM.render(<WelcomePage />, document.querySelectorAll("#root")[0]);
