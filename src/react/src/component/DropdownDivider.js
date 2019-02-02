import React from 'react';
import PropTypes from 'prop-types';


const DropdownDivider = props => {
  return (
    <div className={`br-gray-50 bs-solid bw-0-2-0-2 ${props.className}`} style={props.style}>
      <div className={`block bs-solid bw-2-0-0-0 br-gray-30 mv-2`} />
    </div>
  )
};

DropdownDivider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

DropdownDivider.defaultProps = {
  className: '',
  style: {},
};

export default DropdownDivider;
