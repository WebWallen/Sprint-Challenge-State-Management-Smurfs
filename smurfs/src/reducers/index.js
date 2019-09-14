import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE
} from '../actions/index'; // First: import the relevant actions to be managed by reducer (where all actions are born)

const initialState = { // Second: set up the initial state like so (this = good boilerplate to use in future)
    smurfs: [],
    error: '',
    isFetching: false
}

export const smurfReducer = (state = initialState, action) => { // Third: set reducer equal to intial state
    console.log('reducer', action); // Fourth: Set up a console specifying origin for debugging purposes
    switch (action.type) { // Fifth: Create a switch statement with action.type as an argument
        case GET_SMURFS_START:
            return {
                ...state, // Sixth: Always spread initial state first or you won't have data
                error: '',
                isFetching: true 
            };
        case GET_SMURFS_SUCCESS: 
            return {
                ...state,
                error: '',
                isFetching: false,
                smurfs: action.payload // Seventh: Set action.payload to name for your data
            };
        case GET_SMURFS_FAILURE: 
            return {
                ...state,
                error: action.payload, // Eight: Notice action.payload is on error here
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
                smurfs: action.payload // Use "smurfs" on both as that = original array (possible confusuion due to "smurf" in actions)
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