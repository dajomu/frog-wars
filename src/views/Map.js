import React, { Component } from 'react';
import Pad from '../map-components/Pad';
import MapButton from '../map-components/Button';

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPad: false,
      pads: [
        {x:50, y:100, owner: 'green'},
        {x:200, y:250, owner: 'none'},
        {x:300, y:50, owner: 'red'},
        {x:500, y:200, owner: 'none'},
        {x:600, y:250, owner: 'none'},
        {x:700, y:350, owner: 'red'},
        {x:720, y:30, owner: 'yellow'},
      ],

    };
  }

  onPadClick = (padIndex) => {
    this.setState({selectedPad: padIndex});
  }

  render() {
    const {pads, selectedPad} = this.state;
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

export default Map;