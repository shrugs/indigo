import React from 'react';
import PropTypes from 'prop-types';
import { getDomProps } from '../lib/lib';

const ProtoAnchor = props => {
  return (
    <a
      {...getDomProps(props)}
      href={props.href}
      autoFocus={props.autoFocus}
      className={`block sans ${props.className}`}
      style={props.style}
      rel={props.rel}
      target={props.target}>
      { props.children }
    </a>
  )
}

ProtoAnchor.propTypes = {
  className:      PropTypes.string,
  children:       PropTypes.node,
  autoFocus:      PropTypes.bool,
  style:          PropTypes.object,
  href:           PropTypes.string,
  rel:            PropTypes.string,
  target:         PropTypes.oneOf(['_self','_blank','_parent','_top']),
};

ProtoAnchor.defaultProps = {
  className:      '',
  autoFocus:      false,
  style:          {},
  href:           '',
  rel:            '',
  target:         '_self',
};


export default ProtoAnchor;
