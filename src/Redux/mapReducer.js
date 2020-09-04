// import listObjects from "../testData/ListObjects";

import {
  SET_LIST_LATLNG,
  SET_CURRENT_ZOOM,
  HANDLE_PLACE_MARK,
  USER_SELECT_MARK,
  OFF_PLACE_USER_MARK,
  FIND_SELECT_OBJECT,
  ADD_NEW_DATA_OF_OBJECT,
  ON_CLICK_CLOSE_BUTTON,
} from "./typesActions";

let initialState = {
  hasLocation: false,
  center: { lat: 53.9, lng: 27.56 },
  currentZoom: 12,
  iconUserMarker: "",
  hideCursorMarker: false,
  listObjects: [],
  selectObject: {},
  showDataSelectObject: false,
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_LATLNG: {
      return {
        ...state,
        listObjects: action.listObjects,
      };
    }
    case SET_CURRENT_ZOOM: {
      return {
        ...state,
        currentZoom: action.currentZoom,
      };
    }
    case HANDLE_PLACE_MARK: {
      const newObject = {
        id: Date.now(),
        address: { geo: action.geo },
        icon: state.iconUserMarker,
        // type: state.
      };
      return {
        ...state,
        hasLocation: true,
        listObjects: [...state.listObjects, newObject],
      };
    }
    case USER_SELECT_MARK: {
      return {
        ...state,
        onPlaceMarkers: true,
        iconUserMarker: action.iconUserMarker,
      };
    }
    case OFF_PLACE_USER_MARK: {
      return {
        ...state,
        onPlaceMarkers: false,
        iconUserMarker: "",
      };
    }
    case ON_CLICK_CLOSE_BUTTON: {
      return {
        ...state,
        showDataSelectObject: false,
        selectObject: {},
      };
    }

    case FIND_SELECT_OBJECT: {
      const selectObject = state.listObjects.find(
        (item) =>
          item.address.geo.lat === action.geo.lat &&
          item.address.geo.lng === action.geo.lng
      );

      return {
        ...state,
        selectObject,
        showDataSelectObject: true,
      };
    }
    case ADD_NEW_DATA_OF_OBJECT: {
      const listObjectsWithNewData = state.listObjects.map((item) => {
        if (item.id === state.selectObject.id) {
          item.name = action.newData.name;
          item.address.city = action.newData.address;
          item.comments = action.newData.comments;
          item.linkSourse = action.newData.linkSourse;
          // item.tags = [...action.newData.tags];
          return item;
        }
        return item;
      });
      return {
        ...state,
        listObjects: [...listObjectsWithNewData],
      };
    }
    default:
      return state;
  }
};

export default mapReducer;
