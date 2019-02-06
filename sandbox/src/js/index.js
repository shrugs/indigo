import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import indigo from './indigo/index.js';

class WelcomePage extends Component {
  render() {
    console.log(indigo)
    return (
      <div>
        <h1>Indigo Sandbox test h1</h1>
      </div>
    )
  }
}

ReactDOM.render(<WelcomePage />, document.querySelectorAll("#root")[0]);
