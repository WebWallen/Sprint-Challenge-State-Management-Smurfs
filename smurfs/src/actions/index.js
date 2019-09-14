import axios from 'axios';

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
    dispatch ({ type: GET_SMURFS_START })
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({ type: GET_SMURFS_FAILURE, payload: `${err.response.status}: ${err.response.data}`});
        })
}

export const addSmurf = () => dispatch => {
    dispatch ({ type: ADD_SMURF_START })
    axios.post('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({ type: ADD_SMURF_FAILURE, payload: `${err.response.status}: ${err.response.data}`});
        })
}