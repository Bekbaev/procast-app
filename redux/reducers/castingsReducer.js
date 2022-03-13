import {Alert} from "react-native";

const initialState = {
    castings: [],
    myCastings: [],
    allCasting: [],
    isLoading: false
};

const castingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case `ADD_CASTING`: {
            return {
                ...state,
                castings: action.payload,
                allCasting: action.payload
            }
        }

        case `ADD_MY_CASTING`: {
            return {
                ...state,
                myCastings: action.payload
            }
        }

        case `HANDLE_LOAD`: {
            return {
                ...state,
                isLoading: action.payload
            }
        }

        case `SEARCH_CASTING`: {
            const newCastings = state.castings.filter(c => c.name.toUpperCase().includes(action.payload.toUpperCase()))

            return {
                ...state,
                castings: newCastings
            }
        }

        case `FILTER_CASTING`: {
            let filteredCastings = state.allCasting

            filteredCastings = filteredCastings.filter(el => el.type.includes(action.payload.type))
            filteredCastings = filteredCastings.filter(el => el.city.includes(action.payload.city))
            filteredCastings = filteredCastings.filter(el => el.gender.includes(action.payload.gender))
            // for (let key in action.payload) {
            //     filteredCastings = state.castings.filter(el => el[key].includes(action.payload[key]))
            // }
            return {
                ...state,
                castings: filteredCastings
            }
        }
        case `REVERSE_CASTING`: {

            return {
                ...state,
                castings: state.castings.reverse()
            }
        }

        case 'ADD_TO_FAVORITE': {
            Alert.alert("Успех", "Добавленно в избранное")
            return {
                ...state,
                castings: state.castings.map(c => {
                    if (c._id == action.payload) {
                        return {...c, favorite: true}
                    }
                    return c;
                })
            }
        }
        case 'REMOVE_FROM_FAVORITE': {
            Alert.alert("Успех", " Удаленно из избранного")
            return {
                ...state,
                castings: state.castings.map(c => {
                    if (c._id == action.payload) {
                        return {...c, favorite: false}
                    }
                    return c;
                })
            }
        }
        case 'SEND_REQUEST': {
            Alert.alert("Успех", "Заявка отправлена")
            return {
                ...state,
                castings: state.castings.map(c => {
                    if (c._id == action.payload) {
                        return {...c, added: true}
                    }
                    return c;
                })
            }
        }
        case 'CANCEL_REQUEST': {
            Alert.alert("Успех", "Заявка отклонена")
            return {
                ...state,
                castings: state.castings.map(c => {
                    if (c._id == action.payload) {
                        return {...c, added: false}
                    }
                    return c;
                })
            }
        }
        case 'ADD_CASTING': {
            Alert.alert("Успех", "Кастинг создан")
            action.payload.id = state.castings.length + 1
            state.castings.push(action.payload)
            return { ...state }
        }

        default:
            return state;
    }
};

export const addCastings = (castings) => ({
    type: 'ADD_CASTING',
    payload: castings,
});

export const addMyCastings = (castings) => ({
    type: 'ADD_MY_CASTING',
    payload: castings,
});

export const addToFavorite = (id) => ({
    type: 'ADD_TO_FAVORITE',
    payload: id,
});

export const removeFromFavorite = (id) => ({
    type: 'REMOVE_FROM_FAVORITE',
    payload: id,
});

export const sendRequest = (id) => ({
    type: 'SEND_REQUEST',
    payload: id,
});

export const cancelRequest = (id) => ({
    type: 'CANCEL_REQUEST',
    payload: id,
});

export const addCasting = (obj) => ({
    type: 'ADD_CASTING',
    payload: obj,
});

export const handleLoad = (payload) => ({
    type: 'HANDLE_LOAD',
    payload: payload
});

export const searchCasting = (payload) => ({
    type: 'SEARCH_CASTING',
    payload: payload
});

export const filterCastings = (payload) => ({
    type: 'FILTER_CASTING',
    payload: payload
});
export const reverseCastings = () => ({
    type: 'REVERSE_CASTING',
});


export default castingsReducer;
