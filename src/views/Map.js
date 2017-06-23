import React, { Component } from 'react';
import Pad from '../map-components/Pad';

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pads: [
        {x:50, y:100, owner: 'green', selected: false},
        {x:200, y:250, owner: 'none', selected: false}
      ],
    };
  }

  render() {
    const {pads} = this.state;
    return (
      <div className="Map">
        {pads.map(pad => <Pad {...pad}/>)}
      </div>
    );
  }
}

export default Map;