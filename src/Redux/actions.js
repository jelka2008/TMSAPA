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

export const setlistObjects = (listObjects) => ({
  type: SET_LIST_LATLNG,
  listObjects: listObjects,
});

export const setCurrentZoom = (currentZoom) => ({
  type: SET_CURRENT_ZOOM,
  currentZoom: currentZoom,
});

export const handlePlaceMark = (geo) => ({
  type: HANDLE_PLACE_MARK,
  geo: geo,
});

export const userSelectMark = (iconUserMarker) => ({
  type: USER_SELECT_MARK,
  iconUserMarker: iconUserMarker,
});

export const offPlaceUserMark = () => ({
  type: OFF_PLACE_USER_MARK,
});

export const findSelectObject = (geo) => ({
  type: FIND_SELECT_OBJECT,
  geo: geo,
});

export const addNewDataOfObject = (newData) => ({
  type: ADD_NEW_DATA_OF_OBJECT,
  newData: newData,
});

export const onClickCloseButton = () => ({
  type: ON_CLICK_CLOSE_BUTTON,
});
