import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{ lat: -19.868957023566825, lng: -43.962703505035506 }],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
        />
      );
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={18}
        initialCenter={{
          lat: -19.868957023566825,
          lng: -43.962703505035506,
        }}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper((props) => ({
  apiKey: "AIzaSyBy5IGrP4mfUKYv8IkHgnhVf6QlkmXDNAA",
}))(MapContainer);
