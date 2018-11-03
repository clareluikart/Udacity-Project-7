import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import styles from './App.css';

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const style = {
       width: 'inherit',
       height: 'inherit'
     }
    return (
      <div id="map">
        <Map
          style={style}
          google={this.props.google}
          zoom={17}
          initialCenter={{
          lat: 37.765115,
          lng: -122.243106
          }}
        >
        {this.props.locationsList.map(location => {
          return (
            <Marker onClick={this.onMarkerClick} name={location.name} position={location.position} key={location.name} />
          );
        })}
          <InfoWindow onClose={this.onInfoWindowClose}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <p>{this.state.selectedPlace.name}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyByVeqAjYY4YXDffYL1rgAKSot8XqCc1oQ'
})(MapContainer)
