import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pad extends Component {

  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    owner: PropTypes.string,
    selected: PropTypes.bool,
  }

  render() {
    const {x,y} = this.props;
    return (
      <div style={{top:x, left:y}} className="Pad">
      </div>
    );
  }
}

export default Pad;