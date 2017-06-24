import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Ship extends Component {

  static propTypes = {
    owner: PropTypes.string,
    targetY: PropTypes.number,
    targetX: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
  }

  render() {
    const {owner, x, y} = this.props;
    const shipClasses = classNames({
      Ship: true,
      [`Ship--owned-${owner}`]: !!owner,
    });
    return (
      <div style={{left:x, top:y}} className={shipClasses}></div>
    );
  }
}

export default Ship;