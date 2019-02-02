import React from 'react';
import PropTypes from 'prop-types';
import ProtoButton from '../proto/ProtoButton';


const Button = props => {
  return (
    <ProtoButton {...props} className={`block sans ${props.className}`}>
      { props.children }
    </ProtoButton>
  )
}


Button.propTypes = {
  'prop-color':     PropTypes.oneOf(['blue', 'green', 'yellow']),
  'prop-size':      PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  'prop-type':      PropTypes.oneOf(['solid', 'link', 'border']),
};


Button.defaultProps = {
  'prop-color':     'blue',
  'prop-size':      'md',
  'prop-type':      'solid',
};


export default Button;
