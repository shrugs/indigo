import React from 'react';
import PropTypes from 'prop-types';


const Col = props => {
  return (
    <div className={`col- ${props.className}`} style={props.style}>
      { props.children }
    </div>
  )
};

Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};

Col.defaultProps = {
  className: '',
  style: {},
};


export default Col;
