const LOGIN = 'table/LOGIN';
const LOGIN_SUCCESS = 'table/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'table/LOGIN_FAILURE';

const REGISTER = 'table/REGISTER';
const REGISTER_SUCCESS = 'table/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'table/REGISTER_FAILURE';

const initialState = {
  table: {
    id: 1
  }
};

export default function reducer(state = initialState, action = {}) {
  const { type } = action;

  switch (type) {
  default:
    return state;
  }
}

// export function login(username, password) {
//   return (dispatch, getState) => {
//     dispatch({
//       type: LOGIN,
//       payload: {
//         username,
//         password
//       }
//     });

//     // Do something async here then dispatch LOGIN_SUCCESS or LOGIN_FAILURE
//     setTimeout(() => {
//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: {
//           username,
//           password
//         },
//         meta: 'The optional meta property MAY be any type of value. It is \
//         intended for any extra information that is not part of the payload.\
//         It will still be accessible in the reduxer. You could use it for\
//         some middleware to debug your code'
//       });
//     }, 1000);
//   };
// }

// export function register(username, email, password) {
//   return (dispatch, getState) => {
//     dispatch({
//       type: REGISTER,
//       payload: {
//         username,
//         email,
//         password
//       }
//     });

//     // Do something async here then dispatch LOGIN_SUCCESS or LOGIN_FAILURE
//     setTimeout(() => {
//       dispatch({
//         type: REGISTER_FAILURE,
//         payload: new Error(),
//         error: true
//       });
//     }, 1000);
//   }
// }
