import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const API_MAP = "AIzaSyBczdJRQhuvej7Jw2WPCLdl3pYcwvi6dTs";

class MyGoogleMap extends React.Component {
  containerStyle = {
    width: "400px",
    height: "400px",
  };

  center = {
    lat: 53.89,
    lng: 27.56,
  };

  render() {
    return (
      <LoadScript googleMapsApiKey={API_MAP}>
        <GoogleMap
          mapContainerStyle={this.containerStyle}
          center={this.center}
          zoom={8}
        ></GoogleMap>
      </LoadScript>
    );
  }
}

export default MyGoogleMap;
