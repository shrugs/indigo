import React, { Component } from 'react';
import PropTypes from 'prop-types';

const formInput = (InputComponent) => {
  const formInputHOC = props => {
    return (
      <InputComponent
        {...props}
        onChange={(e) => props.setValue(props.name, e)}
        value={props.formState[props.name]} />
    )
  }
  return formInputHOC
}

export default formInput;
