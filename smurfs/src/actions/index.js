import axios from 'axios';

export const GET_SMURFS_START = "GET_SMURFS_START"; // set the action/dispatch types to variables to prevent bugs related to misspellings
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const ADD_SMURF_START = "ADD_SMURF_START"; // need a "start, success, and failure" for each action (call to Axios in this case)
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
    dispatch ({ type: GET_SMURFS_START }) // First: specify the type of action in dispatch
    axios.get('http://localhost:3333/smurfs') // Second: attach the retrieval URL in axios call
        .then(res => { 
            dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data}); // Tell dispatch action type and payload (must match data structure)
        })
        .catch(err => {
            dispatch({ type: GET_SMURFS_FAILURE, payload: `${err.response.status}: ${err.response.data}`}); // prints error MSG to screen
        })
}

export const addSmurf = smurf => dispatch => {
    dispatch ({ type: ADD_SMURF_START })
    axios.post('http://localhost:3333/smurfs', smurf) // When doing a post request, must also include a name for the data to be posted.
        .then(res => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({ type: ADD_SMURF_FAILURE, payload: `${err.response.status}: ${err.response.data}`});
        })
}