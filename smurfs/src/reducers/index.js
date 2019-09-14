import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE
} from '../actions/index';

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false
}

export const smurfReducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {
        case GET_SMURFS_START:
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case GET_SMURFS_SUCCESS: 
            return {
                ...state,
                error: '',
                isFetching: false,
                smurfs: action.payload
            };
        case GET_SMURFS_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        case ADD_SMURF_START: 
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case ADD_SMURF_SUCCESS: 
            return {
                ...state,
                error: '',
                isFetching: false,
                smurfs: action.payload
            }
        case ADD_SMURF_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default: return state;
    }
}