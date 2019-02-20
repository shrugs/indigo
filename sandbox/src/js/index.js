import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import indigo from './indigo/index.js';

class WelcomePage extends Component {
  render() {
    console.log(indigo)
    return (
      <div className='ph8 slug-4'>
        <div className={'b1 s16 b-black r0'} />
        <div className={'b1 s16 b-black r1'} />
        <div className={'b1 s16 b-black r2'} />
        <div className={'b1 s16 b-black r4'} />

      </div>
    )
  }
}

ReactDOM.render(<WelcomePage />, document.querySelectorAll("#root")[0]);
