import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const FormSubmit = props => {
  return (
    <Button
      {...props}
      disabled={!props.canSubmit}
      onClick={() => props.submitForm({[props.formName]: props.formState})}
      className={`block sans ${props.className}`}>
      { props.children }
    </Button>
  )
}
//
//
// FormSubmit.propTypes = {
//   'prop-color':     PropTypes.oneOf(['blue', 'green', 'yellow']),
//   'prop-size':      PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
//   'prop-type':      PropTypes.oneOf(['solid', 'link', 'border']),
// };
//
//
// FormSubmit.defaultProps = {
//   'prop-color':     'blue',
//   'prop-size':      'md',
//   'prop-type':      'solid',
// };


export default FormSubmit;
