import { createStore, combineReducers } from "redux";
import mapReducer from "./mapReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
  mapView: mapReducer,
  auth: authReducer,
});

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
