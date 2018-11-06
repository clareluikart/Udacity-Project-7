import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import highlight from "./highlight.png" //https://stackoverflow.com/questions/43823289/how-to-import-image-svg-png-in-a-react-component
import NoMap from "./NoMap.js"

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
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

  pushMarker = location => { //significant help from @drunkenkismet on slack
    if(location.name===this.props.activeLocation.name){
    return ( //https://github.com/fullstackreact/google-maps-react/issues/201
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
          style={style}
          role="application"
          aria-label="map"
          google={this.props.google}
          zoom={16}
          initialCenter={{
            lat: 37.769070,
            lng: -122.242940
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
  apiKey: "AIzaSyByVeqAjYY4YXDffYL1rgAKSot8XqCc1oQ", LoadingContainer: NoMap //learned about this property from Doug Brown walkthrough
})(MapContainer);
