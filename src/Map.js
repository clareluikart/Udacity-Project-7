// import ReactDOM from 'react-dom'; //https://stackoverflow.com/questions/38293818/react-uncaught-referenceerror-reactdom-is-not-defined
// import React from 'react';
//
// export default class Map extends React.Component {
//   componentDidMount() {
//     this.loadMap();
//   }
//
//   loadMap() {
//     if (this.props && this.props.google) {
//       // google is available
//       const {google} = this.props;
//       const maps = google.maps;
//
//       const mapRef = this.refs.map;
//       console.log(this.refs.map)
//       const node = ReactDOM.findDOMNode(mapRef);
//       console.log(node)
//
//       let zoom = 14;
//       let lat = 37.774929;
//       let lng = -122.419416;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = Object.assign({}, {
//         center: center,
//         zoom: zoom
//       })
//       this.map = new maps.Map(node, mapConfig);
//     }
//     // ...
//   }
//
//   render() {
//     return (
//       <div ref='map'></div>
//     )
//   }
// }
