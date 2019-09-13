const initialState = [
    {
        name: 'Smurfette',
        age: 21,
        height: '33'
    }
]

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_SMURF":
            return (
                [...state, action.payload]
            )
        default: return state;
    }
}