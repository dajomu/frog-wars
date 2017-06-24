import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MapButton extends Component {

  static propTypes = {
    onButtonClick: PropTypes.func,
    text: PropTypes.string,
  }

  render() {
    const {onButtonClick, text} = this.props;
    return (
      <div className="Map-options--button-container">
        <div className="Map-options--button" onClick={onButtonClick}>
          {text}
        </div>
      </div>
    );
  }
}

export default MapButton;