import React from 'react';
import PropTypes from 'prop-types';


const Label = (props) => {
  return (
    <div className={`mb-1 mt-8 fs-3 text-500 sans ${props.className}`} style={props.style}>
      { props.children }
    </div>
  )
};


Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};


Label.defaultProps = {
  className: '',
  style: {},
};

export default Label;
