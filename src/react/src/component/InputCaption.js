import React from 'react';
import PropTypes from 'prop-types';


const InputCaption = ({ children, className, style }) => {
  return (
    <div className={`mb-2 mt-2 fs-3 text-400 sans gray-70 ${className}`} style={style}>
      { children }
    </div>
  )
};


InputCaption.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};


InputCaption.defaultProps = {
  className: '',
  style: {},
};

export default InputCaption;
