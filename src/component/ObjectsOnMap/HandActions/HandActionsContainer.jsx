import React from "react";
import {
  userSelectMark,
  offPlaceUserMark,
  addNewDataObject,
  onClickCloseButton,
  onActiveEditData,
} from "../../../Redux/actions";
import { connect } from "react-redux";
import HandActions from "./HandActions";

let mapStateToProps = (state) => {
  return {
    selectObject: state.mapView.selectObject,
    iconUserMarker: state.mapView.iconUserMarker,
    showDataSelectObject: state.mapView.showDataSelectObject,
    activeEditData: state.mapView.activeEditData,
  };
};

class HandActionsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSelectObject: this.props.selectObject,
      // name: "this.props.selectObject.name",
      // address: "this.props.selectObject.address",
      // comments: "this.props.selectObject.comments",
      // linkSource: "this.props.selectObject.linkSource",
      // },
      // activeEditData: false,
    };
  }
  componentDidUpdate() {
    console.log(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.showDataSelectObject &&
      nextProps.selectObject !== this.props.selectObject
    ) {
      this.state.dataSelectObject = {
        id: nextProps.selectObject.id,
        name: nextProps.selectObject.name,
        address: nextProps.selectObject.address.city,
        comments: nextProps.selectObject.comments,
        linkSource: nextProps.selectObject.linkSource,
      };
    }
  }

  handleSelectMark = (iconUserMarker) => {
    console.log(iconUserMarker);
    if (this.props.iconUserMarker !== iconUserMarker) {
      this.props.userSelectMark(iconUserMarker);
    } else {
      this.props.offPlaceUserMark();
    }
  };

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      dataSelectObject: {
        ...prev.dataSelectObject,
        [event.target.name]: event.target.value,
      },
    }));
  };

  onSaveNewDataObject = () => {
    this.props.addNewDataObject(this.state.dataSelectObject);
    this.setState({ activeEditData: false });
    console.log(this.state.dataSelectObject);
  };

  onActiveEditData = () => {
    this.props.onActiveEditData();
  };

  render() {
    return (
      <>
        <HandActions
          // idSelectObject={this.props.selectObject.id}
          handleSelectMark={this.handleSelectMark}
          iconUserMarker={this.props.iconUserMarker}
          dataSelectObject={this.state.dataSelectObject}
          showDataSelectObject={this.props.showDataSelectObject}
          changeInputHandler={this.changeInputHandler}
          onSaveData={this.onSaveNewDataObject}
          onClickCloseButton={this.props.onClickCloseButton}
          onActiveEditData={this.onActiveEditData}
          activeEditData={this.props.activeEditData}
        />
      </>
    );
  }
}

export default connect(mapStateToProps, {
  userSelectMark,
  offPlaceUserMark,
  addNewDataObject,
  onClickCloseButton,
  onActiveEditData,
})(HandActionsContainer);
