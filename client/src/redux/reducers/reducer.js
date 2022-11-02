import axios from 'axios'

const GET_NAMES = "GET_NAMES"
const DELETE_NAME = "DELETE_NAME"
const EDIT_NAME = "EDIT_NAME"
const CREATE_NAME = "CREATE_NAME"
const EDIT_RANK = "EDIT_RANK";

function sortData(data) {
  return data.sort((a,b) => a.rank-b.rank)
}

const initialState = {
  names: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_NAMES: {
      return {
        ...state,
        names: action.names,
      };
    }
    case EDIT_NAME: {
      return {
        ...state,
        names: action.names,
      };
    }
    case DELETE_NAME: {
      return {
        ...state,
        names: action.names,
      };
    }
    case CREATE_NAME: {
      return {
        ...state,
        names: action.names,
      };
    }
    case EDIT_RANK: {
      return {
        ...state,
        names: action.names,
      };
    }
    default:
      return state;
  }
}

export function getNames() {
  return (dispatch) => {
    return axios("/names")
      .then(({ data }) => {
        const names = sortData(data);
        dispatch({
          type: GET_NAMES,
          names,
        });
      })
      .catch((err) => {
        alert(JSON.stringify(err.response.data));
      });
  }
}

export function editName(id, body) {
  return (dispatch) => {
    return axios
      .patch(
        `names/name/${id}`,
        {name: body},
      )
      .then(({ data }) => {
        const names = sortData(data);
        dispatch({
          type: EDIT_NAME,
          names,
        });
      })
      .catch((err) => {
        alert(JSON.stringify(err.response.data));
      });
  };
}

export function deleteName(id) {
  return (dispatch) => {
    return axios
      .delete(`names/${id}`)
      .then(({ data }) => {
        const names = sortData(data);
        dispatch({
          type: DELETE_NAME,
          names,
        });
      })
      .catch((err) => {
        alert(JSON.stringify(err.response.data));
      });
  };
}

export function createName(body) {
  return (dispatch) => {
    return axios
      .post('names', { name: body, rank: 0 })
      .then(({ data }) => {
        const names = sortData(data);
        dispatch({
          type: CREATE_NAME,
          names,
        });
      })
      .catch((err) => {
        alert(JSON.stringify(err.response.data));
      });
  };
}

export function editRank(id, body) {
  return (dispatch) => {
    return axios
      .patch(`names/rank/${id}`, { rank: body })
      .then(({ data }) => {
        const names = sortData(data);
        dispatch({
          type: EDIT_RANK,
          names,
        });
      })
      .catch((err) => {
        alert(JSON.stringify(err.response.data));
      });
  };
}