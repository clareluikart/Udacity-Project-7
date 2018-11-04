import React, { Component } from 'react';
import Filter from './Filter.js';
import LocationList from './LocationList.js';
import MapContainer from './MapContainer.js';
import './App.css';

class App extends Component {
  state = {
    locations: [
      {
        position: {lat:37.7637, lng:-122.2436},
        name: "Burma Superstar",
        address: "1345 Park St, Alameda, CA 94501",
        filterType: "Restaurants",
        foursquareID: '4b3fcf3cf964a52058af25e3'
      },
      {
        position: {lat:37.7628, lng:-122.2442},
        name: "Scolari's Good Eats",
        address: "1303 Park St, Alameda, CA 94501",
        filterType: "Restaurants",
        foursquareID: '4c51f2fe9d642d7f4e8f6bde'
      },
      {
        position: {lat:37.7636, lng:-122.2439},
        name: "Taqueria Ramiro & Sons",
        address: "2321 Alameda Ave, Alameda, CA 94501",
        filterType: "Restaurants",
        foursquareID: '4b0b354ef964a520a92e23e3'
      },
      {
        position: {lat:37.7640, lng:-122.2433},
        name: "Rocket Reuse",
        address: "1355 Park St, Alameda, CA 94501",
        filterType: "Books",
        foursquareID: '4cba01084495721e79d64d7a'
      },
      {
        position: {lat:37.7636, lng:-122.2431},
        name: "Books Inc.",
        address: "1344 Park St, Alameda, CA 94501",
        filterType: "Books",
        foursquareID: '4a90b0def964a520271920e3'
      },
      {
        position: {lat:37.7668, lng:-122.2423},
        name: "Alameda Free Library",
        address: "1550 Oak St, Alameda, CA 94501",
        filterType: "Books",
        foursquareID: '46dea7aff964a520994a1fe3'
      },
      {
        position: {lat:37.7634, lng:-122.2443},
        name: "Alameda Museum",
        address: "2324 Alameda Ave, Alameda, CA 94501",
        filterType: "Museums",
        foursquareID: '4ccde39c511b236ad503fac9'
      },
    ],
    filteredList: [],
    activeLocation: {}
  }

  startMarkerAnimation = (name) => {
    console.log(this.state.locations.filter(location => location.name === name)[0])
    this.setState({activeLocation: (this.state.locations.filter(location => location.name === name)[0])})
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
        <MapContainer id="map" activeLocation={this.state.activeLocation} locationsList={this.state.filteredList} />
        <div id="info">
          <Filter onChange={this.filterUpdate} value={"All"}/>
          <LocationList startMarkerAnimation={this.startMarkerAnimation} locationsList={this.state.filteredList}/>
          <p>Information thanks to Google Maps and Foursquare</p>
        </div>
      </div>
    );
  }
}

export default App;
