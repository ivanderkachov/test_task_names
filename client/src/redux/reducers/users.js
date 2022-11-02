import axios from "axios";

const GET_TOKEN = "GET_TOKEN"
const SIGN_OUT = "SIGN_OUT"

const initialState = {
  token: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        token: action.token,
      };
    }
    default:
      return state;
  }
};

export function getToken(body, type) {
  if (type === 'login') {
    return (dispatch) => {
      return axios
      .post("/auth/login", body)
        .then(({ data }) => {
          const token = data.token;
          dispatch({
            type: GET_TOKEN,
            token,
          });
        })
        .catch((err) => {
          alert(JSON.stringify(err.response.data));
        });
    };
  } else {
    return (dispatch) => {
      return axios
      .post("/auth/registration", body)
        .then(({ data }) => {
          const token = data.token;
          dispatch({
            type: GET_TOKEN,
            token,
          });
        })
        .catch((err) => {
          alert(JSON.stringify(err.response.data));
        });
    };
  }

}
export function signOut() {
  return {
    type: SIGN_OUT,
    token: ''
  }
}