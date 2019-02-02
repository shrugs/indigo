import React from 'react';
import PropTypes from 'prop-types'

const P = props => {

  const measure = getMeasure(manifest, props.measure)

  return (
    <p className={`mb-7 ${measure} ${props.className}`} style={props.style}>
      { props.children }
    </p>
  )
}

const getMeasure = (sm, m) => sm[m];

const manifest = {
  sm: 'measure-sm',
  md: 'measure-md',
  lg: 'measure-lg',
}

P.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};


P.defaultProps = {
  className: '',
  style: {},
  measure: 'md',
};


export default P;
