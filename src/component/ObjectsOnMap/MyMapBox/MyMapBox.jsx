import React from "react";
import {
  Map as LeafletMap,
  TileLayer,
  LayerGroup,
  Marker,
  Popup,
  LayersControl,
  FeatureGroup,
  Circle,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import isEqual from "react-fast-compare";
import ReactLeafletSearch from "react-leaflet-search";

import { v4 as uuidv4 } from "uuid";
// import otherMark from "./assets/iconsGeo/otherMark";
import L from "leaflet";

require("../../../../node_modules/leaflet/dist/leaflet.css");
require("../../../../node_modules/react-leaflet-markercluster/dist/styles.min.css");

// const MyMapBox = (props) => {
//   console.log(props);
class MyMapBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const myIcon = otherMark({ geoIcon: "ant.svg" });
    const userMarker = this.props.showCursorMarker &&
      this.props.onPlaceMarkers && (
        <Marker
          position={this.props.cursorLatlng}
          icon={this.props.userMarkerIcon}
          onClick={this.props.onObjectMarkerSet}
        ></Marker>
      );

    const markObjects = this.props.listObjects.map((marker) => {
      const markerIcons = new L.Icon({
        iconUrl: `/img/iconGEO/${marker.icon}`,
        iconRetinaUrl: `/img/iconGEO/${marker.icon}`,
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(30, 55),
      });
      return (
        <Marker
          position={marker.address.geo}
          icon={markerIcons}
          key={uuidv4()}
          onClick={this.props.onMapObjectSelect}
          onContextMenu={this.props.onMapObjectContext}
          className="marker_on_map"
          id={marker.id}
        >
          {/* <div>{marker.type}</div> */}
        </Marker>
      );
    });
    // const customProvider = {
    //   search: async (inputValue) => {
    //     // do fetch or anything
    //     return {
    //       info: {
    //         bounds: boundingBox,
    //         latitude: number,
    //         longitude: number,
    //         name: displayName
    //       },
    //         raw: rawResponse
    // }
    //   }
    // }
    return (
      <div
        className="leaflet-container"
        onMouseLeave={this.props.onHideCursorMarker}
        onMouseEnter={this.props.onShowCursorMarker}
      >
        <LeafletMap
          center={this.props.center}
          zoom={this.props.currentZoom}
          maxZoom={18}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
          onClick={this.props.handleClickPast}
          ref={this.props.mapRef}
          style={{
            zIndex: 0,
          }}
          onViewportChanged={this.props.controlCurrentZoom}
          onMouseMove={this.props.newLatlngCursors}
        >
          <ReactLeafletSearch
            position="topright"
            provider="OpenStreetMap"
            providerOptions={{ region: "by" }}
            inputPlaceholder="н.п., ул."
            zoom={this.props.currentZoom}
            closeResultsOnClick={true}
            showPopup={false}
          />
          <LayersControl position="topright">
            <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
          </LayersControl>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup>
            {userMarker}
            {markObjects}
          </MarkerClusterGroup>
          {/* {this.props.popup && (
            <Popup position={this.props.popup.position}>
              <div>
                <p>{this.props.popup.content}</p>
                <button onClick={this.props.handleClickPopup}>Click Me!</button>
              </div>
            </Popup>
          )} */}
        </LeafletMap>
      </div>
    );
  }
}
export default MyMapBox;
