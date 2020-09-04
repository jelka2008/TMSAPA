// import { authAPI } from "../API/API";
// import { stopSubmit } from "redux-form";

const SET_USERS_DATA = "SET_USERS_DATA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

// export const setAuthUserData = (userId, login, email, isAuth) => ({
//   type: SET_USERS_DATA,
//   payload: { userId, login, email, isAuth },
// });

// export const getAuthUserData = () => (dispatch) => {
//   return authAPI.getAuth().then((data) => {
//     if (data.resultCode === 0) {
//       let { id, login, email } = data.data;
//       dispatch(setAuthUserData(id, login, email, true));
//     }
//   });
// };

// export const login = (email, password, rememberMe) => {
//   return (dispatch) => {
//     authAPI.login(email, password, rememberMe).then((response) => {
//       if (response.data.resultCode === 0) {
//         // dispatch(getAuthUserData());
//       } else {
//         let message =
//           response.data.messages.length > 0
//             ? response.data.messages[0]
//             : "Some error";
//         dispatch(stopSubmit("login", { _error: message }));
//       }
//     });
//   };
// };

// export const logout = () => {
//   return (dispatch) => {
//     authAPI.logout().then((response) => {
//       if (response.data.resultCode === 0) {
//         // dispatch(setAuthUserData(null, null, null, false));
//       }
//     });
//   };
// };

export default authReducer;
