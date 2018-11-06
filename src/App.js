import React, { Component } from 'react';
import Filter from './Filter.js';
import LocationList from './LocationList.js';
import MapContainer from './MapContainer.js';
import './App.css';

class App extends Component {
  state = {
    locations: [],
    filteredList: [],
    activeLocation: {}
  }

  startMarkerAnimation = (name) => {
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
    fetch('https://api.myjson.com/bins/12i5ce')
    .then(response => response.json()).then((data) => {
      this.setState({filteredList: data}); //got help from Laurette L on slack with the API
      this.setState({locations: data});
    })
    .catch(function(error){
        console.log(error);
    });
  }

  render() {
    return (
      <div id="app">
        <div id="mapContainer">
          <MapContainer id="map" activeLocation={this.state.activeLocation} locationsList={this.state.filteredList} />
        </div>
        <div id="info">
          <h1>Best of Alameda</h1>
          <Filter onChange={this.filterUpdate} value={"All"}/>
          <LocationList startMarkerAnimation={this.startMarkerAnimation} locationsList={this.state.filteredList}/>
          <p>Maps thanks to Google Maps and locations thanks to myjson.com</p>
        </div>
      </div>
    );
  }
}

export default App;
