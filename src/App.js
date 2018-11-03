import React, { Component } from 'react';
import Filter from './Filter.js';
import LocationList from './LocationList.js';
import MapContainer from './MapContainer.js';
import './App.css';

class App extends Component {
  state = {
    locations: [
      {
        position: {lat:37.7829, lng:-122.4626},
        name: "Burma Superstar",
        address: "1345 Park St, Alameda, CA 94501",
        filterType: "restaurant"
      },
      {
        position: {lat:37.7628, lng:-122.2442},
        name: "Scolari's Good Eats",
        address: "1303 Park St, Alameda, CA 94501",
        filterType: "restaurant"
      },
      {
        position: {lat:37.7636, lng:-122.2439},
        name: "Taqueria Ramiro & Sons",
        address: "2321 Alameda Ave, Alameda, CA 94501",
        filterType: "restaurant"
      },
      {
        position: {lat:37.7640, lng:-122.2433},
        name: "Rocket Reuse",
        address: "1355 Park St, Alameda, CA 94501",
        filterType: "books"
      },
      {
        position: {lat:37.7636, lng:-122.2431},
        name: "Books Inc.",
        address: "1344 Park St, Alameda, CA 94501",
        filterType: "books"
      },
      {
        position: {lat:37.7668, lng:-122.2423},
        name: "Alameda Free Library",
        address: "1550 Oak St, Alameda, CA 94501",
        filterType: "books"
      },
      {
        position: {lat:37.7634, lng:-122.2443},
        name: "Alameda Museum",
        address: "2324 Alameda Ave, Alameda, CA 94501",
        filterType: "museum"
      },
    ],
    markers: [],
    infoWindow: []
  }

  componentDidMount(){}

  render() {
    return (
      <div className="all">
        <MapContainer id="map" locationsList={this.state.locations} />
        <div id="info">
          <Filter />
          <LocationList locationsList={this.state.locations}/>
          <p>Information thanks to Google Maps and Foursquare</p>
        </div>
      </div>
    );
  }
}

export default App;
