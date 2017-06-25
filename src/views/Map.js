import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPad, selectPadAction} from '../redux/actions/map';
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

  onButtonClick = (buttonAction) => {
    this.props.selectPadAction(buttonAction);
  }

  render() {
    const {pads, selectedPadAction, selectedPad, ships} = this.props;
    const userPadSelected = selectedPad !== -1 && pads[selectedPad].owner === 'green';
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
          {ships.map((ship, i) => 
            <Ship {...ship}
              key={`Ship-${i}`}/>)}
        </div>
        <div className="Map-options">
          {userPadSelected && [{action: 'colonize', population: 100}, {action: 'attack', population: 150}].map(buttonAction => 
            <MapButton action={buttonAction.action} 
              disabled={pads[selectedPad].population < buttonAction.population}
              isActive={buttonAction.action === selectedPadAction}
              onButtonClick={() => this.onButtonClick(buttonAction.action)}
              text={`${buttonAction.action} (${buttonAction.population})`}/>
          )}
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
    selectPadAction: bindActionCreators(selectPadAction, dispatch),
    startTimer: bindActionCreators(startTimer, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
