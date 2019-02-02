import React from 'react';
import PropTypes from 'prop-types';
import ProtoAnchor from '../proto/ProtoAnchor'


const Anchor = props => {

  return (
    <ProtoAnchor
      {...props}
      prop-disabled={props['prop-disabled'].toString()}>
      { props.children }
    </ProtoAnchor>
  )
}

Anchor.propTypes = {
  'prop-disabled':  PropTypes.bool,
  'prop-color':     PropTypes.oneOf(['black']),
  'prop-size':      PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  'prop-type':      PropTypes.oneOf(['solid', 'link', 'outline']),
};

Anchor.defaultProps = {
  'prop-disabled':  false,
  'prop-color':     'black',
  'prop-size':      'md',
  'prop-type':      'link',
};


export default Anchor;
