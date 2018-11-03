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
        filterType: "Restaurants"
      },
      {
        position: {lat:37.7628, lng:-122.2442},
        name: "Scolari's Good Eats",
        address: "1303 Park St, Alameda, CA 94501",
        filterType: "Restaurants"
      },
      {
        position: {lat:37.7636, lng:-122.2439},
        name: "Taqueria Ramiro & Sons",
        address: "2321 Alameda Ave, Alameda, CA 94501",
        filterType: "Restaurants"
      },
      {
        position: {lat:37.7640, lng:-122.2433},
        name: "Rocket Reuse",
        address: "1355 Park St, Alameda, CA 94501",
        filterType: "Books"
      },
      {
        position: {lat:37.7636, lng:-122.2431},
        name: "Books Inc.",
        address: "1344 Park St, Alameda, CA 94501",
        filterType: "Books"
      },
      {
        position: {lat:37.7668, lng:-122.2423},
        name: "Alameda Free Library",
        address: "1550 Oak St, Alameda, CA 94501",
        filterType: "Books"
      },
      {
        position: {lat:37.7634, lng:-122.2443},
        name: "Alameda Museum",
        address: "2324 Alameda Ave, Alameda, CA 94501",
        filterType: "Museums"
      },
    ],
    filteredList: []
  }

  filterUpdate = (type) => {
    if(type === 'All'){
      this.setState({filteredList: this.state.locations})
    }
    else{
      this.setState({filteredList: this.state.locations.filter(location => location.filterType === type)})
    }
  }

  componentDidMount(){
    this.setState({filteredList: this.state.locations})
  }

  render() {
    return (
      <div id="app">
        <MapContainer id="map" locationsList={this.state.filteredList} />
        <div id="info">
          <Filter onChange={this.filterUpdate} value={"All"}/>
          <LocationList locationsList={this.state.filteredList}/>
          <p>Information thanks to Google Maps and Foursquare</p>
        </div>
      </div>
    );
  }
}

export default App;
