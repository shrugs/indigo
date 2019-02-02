import React from 'react';
import PropTypes from 'prop-types';

const Row = props => {
  return (
    <div className={`row ${props.className}`} style={props.style}>
      { props.children }
    </div>
  )
};

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};

Row.defaultProps = {
  className: '',
  style: {},
};


export default Row
