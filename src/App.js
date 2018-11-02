import React, { Component } from 'react';
import Filter from './Filter.js';
import LocationList from './LocationList.js';
import Map from './Map.js';
import './App.css';

class App extends Component {
  state = {
    locations: [],
    markers: [],
    infoWindow: []
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <header className="header">
        </header>
        <body>
          <div id="map">
            <Map locationsList={this.state.locations} />
          </div>
          <div id="info">
            <Filter />
            <LocationList locationsList={this.state.locations}/>
            <p>Information thanks to Google Maps and Foursquare</p>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
