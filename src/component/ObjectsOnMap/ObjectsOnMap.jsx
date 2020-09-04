import React from "react";
import MyAddressTree from "./MyAddressTree/MyAddressTree";
import MyMapBoxContainer from "./MyMapBox/MyMapBoxContainer";
import HandActionsContainer from "./HandActions/HandActionsContainer";
import "../assets/css/objects_on_map.css";

class ObjectsOnMap extends React.Component {
  render() {
    // console.log(this.props.match.params.name);
    return (
      <>
        <MyAddressTree />
        <MyMapBoxContainer />
        <HandActionsContainer />
      </>
    );
  }
}

export default ObjectsOnMap;
