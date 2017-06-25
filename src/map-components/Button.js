import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MapButton extends Component {

  static propTypes = {
    onButtonClick: PropTypes.func,
    text: PropTypes.string,
  }

  render() {
    const {isActive, onButtonClick, text} = this.props;
    const buttonClasses = classNames({
      'Map-options--button': true,
      active: isActive,
    });
    
    return (
      <div className="Map-options--button-container">
        <button className={buttonClasses} onClick={onButtonClick}>
          {text}
        </button>
      </div>
    );
  }
}

export default MapButton;