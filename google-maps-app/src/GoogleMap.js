// src/GoogleMap.js

import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


class GoogleMap extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '400px',
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Replace with your desired coordinates
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAfl452zj2XBlI5JkRFlRnXYeUulgv2VD8', // Replace with your API key
})(GoogleMap);
