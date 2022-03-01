import {authApi, castingApi, fileApi} from "../../api/api";
import {addCastings, addMyCastings, cancelRequest, handleLoad, sendRequest} from "./castingsReducer";
import {AsyncStorage} from "react-native";

export const fetchCastings = () => {
    return async dispatch => {
        const castings = await castingApi.getAll()
        const user_id = await AsyncStorage.getItem('user_id')

        castings.map(c => {
            const myRequests = c?.requests?.filter(r => r.user_id === user_id)
            if (myRequests.length) {
                c.added = true
            } else {
                c.added = false
            }
            c.favorite = false
        })

        dispatch(addCastings(castings))
    }
}
export const fetchMyCastings = () => {
    return async dispatch => {
        const castings = await castingApi.getMyCastings()
        dispatch(addMyCastings(castings))
    }
}

export const fetchRequestedCastings = () => {
    return async dispatch => {
        const castings = await castingApi.castingRequested()
        const user_id = await AsyncStorage.getItem('user_id')

        castings.map(c => {
            let status = c.requests.filter(r => r.user_id === user_id)[0].status
            c.status = status
        })

        dispatch(addMyCastings(castings))
    }
}

export const createRequest = (id) => {
    return async dispatch => {
        const casting = await castingApi.sendRequest(id)
        dispatch(sendRequest(id))
        return casting
    }
}

export const deleteRequest = (id) => {
    return async dispatch => {
        const casting = await castingApi.removeRequest(id)
        dispatch(cancelRequest(id))
        return casting
    }
}

export const createCasting = (newCasting, imageUri) => {
    return async dispatch => {
        dispatch(handleLoad(true))
        //SAVE FILE
        const form = new FormData();
        form.append('image', {
            uri : imageUri,
            type : 'image/jpeg',
            name : 'image.jpg'
        });

        const imageName = await fileApi.saveFile(form)
        newCasting.image = 'http://food-j.kz/uploads/' + imageName
        await castingApi.create(newCasting)
        dispatch(handleLoad(false))

        return true
    }
}
export const fillProfile = (profileInfo, imageUri) => {
    return async dispatch => {
        // dispatch(handleLoad(true))
        //SAVE FILE
        const form = new FormData();
        form.append('image', {
            uri : imageUri,
            type : 'image/jpeg',
            name : 'image.jpg'
        });

        const imageName = await fileApi.saveFile(form)
        profileInfo.image = 'http://food-j.kz/uploads/' + imageName
        await authApi.fillProfile(profileInfo)
        // dispatch(handleLoad(false))

        return true
    }
}
