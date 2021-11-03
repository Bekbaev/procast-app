import {Alert} from "react-native";

const initialState = {
    isAuth: false
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': {
            Alert.alert("Успех", "Удаленно из избранного")
            return {
                ...state,
            }
        }
        case 'REMOVE_FROM_FAVORITE': {
            Alert.alert("Успех", "Добавленно в избранное")
            return {
                ...state,
                castings: state.castings.map(c => {
                    if (c.id == action.payload) {
                        return {...c, favorite: false}
                    }
                    return c;
                })
            }
        }

        default:
            return state;
    }
};

export const addToFavorite = (id) => ({
    type: 'ADD_TO_FAVORITE',
    payload: id,
});

export const removeFromFavorite = (id) => ({
    type: 'REMOVE_FROM_FAVORITE',
    payload: id,
});


export default authReducer;