import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';
import Col from './Col';

const RowCol = props => {
  return (
    <Row className={props.rowClassName} style={props.style}>
      <Col className={props.colClassName}>
      { props.children }
      </Col>
    </Row>
  )
};


RowCol.propTypes = {
  colClassName:   PropTypes.string,
  rowClassName:   PropTypes.string,
  style:          PropTypes.object,
  children:       PropTypes.node,
};


RowCol.defaultProps = {
  colClassName:   '',
  rowClassName:   '',
  style:          {},
  children:       undefined,
};


export default RowCol
