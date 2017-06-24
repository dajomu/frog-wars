import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPad} from '../redux/actions/map';
import Pad from '../map-components/Pad';
import MapButton from '../map-components/Button';

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPad: false,
    };
  }

  onPadClick = (padIndex) => {
    this.props.selectPad(padIndex);
    // this.setState({selectedPad: padIndex});
  }

  render() {
    // const {selectedPad} = this.state;
    const {pads, selectedPad} = this.props;
    return (
      <div>
        <div className="Map-info">
        </div>
        <div className="Map">
          {pads.map((pad, i) => <Pad {...pad} isSelected={i === selectedPad} onPadClick={() => this.onPadClick(i)}/>)}
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
    ...state.map,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectPad: bindActionCreators(selectPad, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
