import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import highlight from "./highlight.png" //https://stackoverflow.com/questions/43823289/how-to-import-image-svg-png-in-a-react-component

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  componentWillReceiveProps = props => {
    this.setState({ activeLocation: this.props.activeLocation });
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  tempArr = [];

  pushMarker = location => { //significant help from @drunkenkismet on slack
    if(location.name===this.props.activeLocation.name){
    this.tempArr.push( //https://github.com/fullstackreact/google-maps-react/issues/201
      <Marker
        onClick={this.onMarkerClick}
        name={location.name}
        position={location.position}
        key={location.name}
        icon={highlight}
        Animation={this.props.google.maps.Animation.DROP}
      />
    );
    return (
      <Marker
        onClick={this.onMarkerClick}
        name={location.name}
        position={location.position}
        key={location.name}
        icon={highlight}
        Animation={this.props.google.maps.Animation.DROP}
      />
    );
  }else{
    this.tempArr.push(
      <Marker
        onClick={this.onMarkerClick}
        name={location.name}
        position={location.position}
        key={location.name}
      />
    );

    return (
      <Marker
        onClick={this.onMarkerClick}
        name={location.name}
        position={location.position}
        key={location.name}
      />
    );
  }
  };

  render() {
    const style = {
      width: "100%",
      height: "100%"
    };
    return (
      <div id="map">
        <Map
          role="application"
          aria-label="map"
          style={style}
          google={this.props.google}
          zoom={17}
          initialCenter={{
            lat: 37.765115,
            lng: -122.243106
          }}>
          {this.props.locationsList.map(location => this.pushMarker(location))}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <p>{this.state.selectedPlace.name}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyByVeqAjYY4YXDffYL1rgAKSot8XqCc1oQ"
})(MapContainer);
