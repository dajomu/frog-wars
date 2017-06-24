import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPad} from '../redux/actions/map';
import {startTimer} from '../redux/actions/game';
import Pad from '../map-components/Pad';
import Ship from '../map-components/Ship';
import MapButton from '../map-components/Button';

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPad: false,
    };
  }

  componentDidMount() {
    this.props.startTimer();
  }

  onPadClick = (padIndex) => {
    this.props.selectPad(padIndex);
  }

  render() {
    const {pads, selectedPad, ships} = this.props;
    return (
      <div>
        <div className="Map-info">
        </div>
        <div className="Map">
          {pads.map((pad, i) => 
            <Pad {...pad}
              key={`Pad-${i}`}
              isSelected={i === selectedPad} 
              onPadClick={() => this.onPadClick(i)}/>)}
          {ships.map((ship, i) => <Ship {...ship}/>)}
        </div>
        <div className="Map-options">
          <MapButton />
          <MapButton />
        </div>
      </div>
    );
  }
}


function mapStateToProps(state, props) {
  return {
    pads: state.pads,
    ships: state.ships,
    ...state.map,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectPad: bindActionCreators(selectPad, dispatch),
    startTimer: bindActionCreators(startTimer, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
