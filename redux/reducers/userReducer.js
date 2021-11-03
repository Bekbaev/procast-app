const initialState = {
    role: null
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case `SET_ROLE`: {
            return {
                ...state,
                role: action.payload
            }
        }

        default:
            return state;
    }
};

export const setRole = (role) => ({
    type: 'SET_ROLE',
    payload: role,
});



export default userReducer;