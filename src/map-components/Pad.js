import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Pad extends Component {

  static propTypes = {
    isSelected: PropTypes.bool,
    onPadClick: PropTypes.func,
    owner: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }

  render() {
    const {isSelected, onPadClick, owner, population, x, y} = this.props;
    const padClasses = classNames({
      'Pad': true,
      'Pad--selected': isSelected,
      [`Pad--owned-${owner}`]: !!owner,
    });
    return (
      <div style={{left:x, top:y}} 
        className={padClasses} 
        onClick={onPadClick}>
          {population}
      </div>
    );
  }
}

export default Pad;