import React from "react";
import {
  userSelectMark,
  offPlaceUserMark,
  addNewDataOfObject,
  onClickCloseButton,
} from "../../../Redux/actions";
import { connect } from "react-redux";
import HandActions from "./HandActions";

let mapStateToProps = (state) => {
  return {
    selectObject: state.mapView.selectObject,
    iconUserMarker: state.mapView.iconUserMarker,
    showDataSelectObject: state.mapView.showDataSelectObject,
  };
};

class HandActionsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataObject: this.props.selectObject,
      // name: "this.props.selectObject.name",
      // address: "this.props.selectObject.address",
      // comments: "this.props.selectObject.comments",
      // linkSourse: "this.props.selectObject.linkSourse",
      // },
      activeEditData: false,
    };
  }
  componentDidUpdate() {
    // console.log(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectObject !== this.props.selectObject) {
      this.state.dataObject = { ...nextProps.selectObject };
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
      dataObject: {
        ...prev.dataObject,
        [event.target.name]: event.target.value,
      },
    }));
  };

  onSaveNewDataObject = () => {
    this.props.addNewDataOfObject(this.state.dataObject);
    this.setState({ activeEditData: false });
    console.log(this.state.dataObject);
  };

  onActiveEditData = () => {
    this.setState({ activeEditData: true });
  };

  render() {
    console.log({
      fromProps: this.props.selectObject,
      fromState: this.state.dataObject,
    });
    return (
      <>
        <HandActions
          handleSelectMark={this.handleSelectMark}
          iconUserMarker={this.props.iconUserMarker}
          selectObject={this.state.dataObject}
          showDataSelectObject={this.props.showDataSelectObject}
          changeInputHandler={this.changeInputHandler}
          onSaveData={this.onSaveNewDataObject}
          onClickCloseButton={this.props.onClickCloseButton}
          onActiveEditData={this.onActiveEditData}
          activeEditData={this.state.activeEditData}
        />
      </>
    );
  }
}

export default connect(mapStateToProps, {
  userSelectMark,
  offPlaceUserMark,
  addNewDataOfObject,
  onClickCloseButton,
})(HandActionsContainer);
