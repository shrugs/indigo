import React, { Component } from 'react';
import PropTypes from 'prop-types';

const formSubmit = (ButtonComponent) => {
  const formSubmitHOC = props => {
    return (
      <ButtonComponent
        {...props}
        onClick={() => props.submitForm({[props.formName]: props.formState})}
        className={`block sans ${props.className}`}>
        { props.children }
      </ButtonComponent>
    )
  }
  return formSubmitHOC
}

export default formSubmit;
