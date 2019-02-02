import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const FormInput = props => {

  return (
    <Input onChange={(e) => props.setValue(props.name, e)} value={props.formState[props.name]} {...props} />
  );
}


// FormInput.propTypes = {
//   focussed:         PropTypes.bool,
//   beenFocussed:     PropTypes.bool,
//   hasSubmitted:     PropTypes.bool,
//   displayPass:      PropTypes.bool,
//   displayFailure:   PropTypes.bool,
//   advanced:         PropTypes.bool,
//   error:            PropTypes.string,
//   valClassname:     PropTypes.string,
//   size:             PropTypes.oneOf(['s', 'm', 'l', 'xl']),
// };
//
//
// FormInput.defaultProps = {
//   focussed:         false,
//   beenFocussed:     false,
//   hasSubmitted:     false,
//   displayPass:      false,
//   displayFailure:   false,
//   advanced:         false,
//   error:            '',
//   size:             'm',
//   format:           'normal',
// };


export default FormInput;
