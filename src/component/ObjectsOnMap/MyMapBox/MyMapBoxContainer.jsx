import React, { useState, useEffect } from "react";
import MyMapBox from "./MyMapBox";
import { getListObjects } from "../../../Redux/dispatchActions";
import {
  setCurrentZoom,
  handlePlaceMark,
  setlistObjects,
  findSelectObject,
} from "../../../Redux/actions";
import { connect } from "react-redux";
import L from "leaflet";

let mapStateToProps = (state) => {
  return {
    mapView: state.mapView,
  };
};

const MyMapBoxContainer = (props) => {
  const [cursorLatlng, setCursorLatlng] = useState({ lat: 53.9, lng: 27.56 });
  const [showCursorMarker, setShowCursorMarker] = useState(false);
  const [popup, setPopup] = useState({
    position: {},
    content: "",
  });

  useEffect(() => {
    // const url = "https://jsonplaceholder.typicode.com/users";
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((listObjects) => {
    //     console.log(listObjects);
    //     props.setlistObjects(listObjects);
    //   });

    // localStorage.clear();
    const listObjectsCurrent = JSON.parse(
      localStorage.getItem("listObjects") || "[]"
    );
    props.setlistObjects(listObjectsCurrent);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "listObjects",
      JSON.stringify(props.mapView.listObjects)
    );
  }, [props.mapView.listObjects]);

  const mapRef = React.createRef();

  const controlCurrentZoom = (e) => {
    const map = mapRef.current;
    if (map != null) {
      map.leafletElement.locate();
      if (e.zoom !== props.mapView.currentZoom) {
        props.setCurrentZoom(e.zoom);
      }
    }
  };

  const newLatlngCursors = (e) => {
    // console.log(e);
    if (props.mapView.onPlaceMarkers === true) {
      setCursorLatlng(e.latlng);
    }
  };

  const onHideCursorMarker = (e) => {
    setShowCursorMarker(false);
  };

  const onShowCursorMarker = (e) => {
    setShowCursorMarker(true);
  };

  const onObjectMarkerSet = (e) => {
    props.handlePlaceMark(e.latlng);
  };

  const onMapObjectSelect = (e) => {
    props.findSelectObject(e.latlng);
  };

  const onMapObjectContext = (e) => {
    console.log(e);
  };

  const handleClickPopup = () => {
    // close Popup
  };

  const userMarkerIcon = new L.Icon({
    iconUrl: `/img/iconGEO/${props.mapView.iconUserMarker}`,
    iconRetinaUrl: `/img/iconGEO/${props.mapView.iconUserMarker}`,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 35),
  });

  return (
    <>
      <MyMapBox
        popup={popup}
        listObjects={props.mapView.listObjects}
        hasLocation={props.mapView.hasLocation}
        currentZoom={props.mapView.currentZoom}
        center={props.mapView.center}
        onPlaceMarkers={props.mapView.onPlaceMarkers}
        userMarkerIcon={userMarkerIcon}
        cursorLatlng={cursorLatlng}
        showCursorMarker={showCursorMarker}
        mapRef={mapRef}
        controlCurrentZoom={controlCurrentZoom}
        onObjectMarkerSet={onObjectMarkerSet}
        newLatlngCursors={newLatlngCursors}
        onHideCursorMarker={onHideCursorMarker}
        onShowCursorMarker={onShowCursorMarker}
        onMapObjectSelect={onMapObjectSelect}
        onMapObjectContext={onMapObjectContext}
        handleClickPopup={handleClickPopup}
      />
    </>
  );
};

export default connect(mapStateToProps, {
  setCurrentZoom,
  handlePlaceMark,
  setlistObjects,
  findSelectObject,
  getListObjects,
})(MyMapBoxContainer);
