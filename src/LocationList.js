import React from 'react';
import Location from './Location.js'

export default class LocationList extends React.Component {
  state = {}
  render() {
    return (
      <ul className="books-grid">
        {this.props.locationsList.map(location => { //got help for this part from @drunkenkismet on Slack
          return (
            <li key={location.name}>
              <Location startMarkerAnimation={this.props.startMarkerAnimation} location={location}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
