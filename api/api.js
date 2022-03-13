import instance from "./instance";
import axios from "axios";
import {AsyncStorage} from "react-native";

export const authApi = {
    async login(phone, password) {
        try {
            const {data} = await instance.post('login', {phone, password})
            return data
        } catch (e) {
            alert(e)
        }
    },
    async registration(obj) {
        const {data} = await instance.post('registration', obj)
        return data
    },
    async getMe() {
        const {data} = await instance.get('getMe')
        return data
    },
    async getUser(id) {
        const {data} = await instance.get(`user/${id}`)
        return data
    },
    async fillProfile(profileInfo) {
        try {
            const {data} = await instance.put(`user`, profileInfo)
            return data
        }catch (e) {
            alert(JSON.stringify(e))
        }

    },
    async getProfile(id) {
        if(!id){
            id = await AsyncStorage.getItem('user_id')
        }
        const {data} = await instance.get(`profile/${id}`)
        return data
    },
}

export const castingApi = {
    async getAll() {
        const {data} = await instance.get('casting')
        return data
    },
    async getById(id){
        const {data} = await instance.get(`casting/${id}`)
        return data
    },
    async getMyCastings() {
        const {data} = await instance.get('myCastings')
        return data
    },
    async castingRequested() {
        const {data} = await instance.get('castingRequested')
        return data
    },
    async getRequested(id) {
        const {data} = await instance.get(`getRequested/${id}`)
        return data
    },
    async getRequestedCompleted(id) {
        const {data} = await instance.get(`getRequestedCompleted/${id}`)
        return data
    },
    async getRequestedRemoved(id) {
        const {data} = await instance.get(`getRequestedRemoved/${id}`)
        return data
    },
    async create(obj) {
        try {
            const {data} = await instance.post('casting', obj)
            return data
        } catch (e) {
            alert(e)
        }
    },
    async update(obj) {
        try {
            const {data} = await instance.put('casting', obj)
            return data
        } catch (e) {
            alert(e)
        }
    },
    sendRequest(casting_id) {
        return instance.post(`request`, {casting_id: casting_id})
    },
    updateRequest(casting_id, user_id, status) {
        return instance.put(`request`, {casting_id: casting_id, user_id: user_id, status: status})
    },
    removeRequest(casting_id) {
        return instance.delete(`request`, {data: {casting_id: casting_id}})
    },
    deleteCasting(id){
        const {data} = instance.delete(`casting/${id}`, {data: {id: id}})
        return data
    },

}

export const fileApi = {
    async saveFile(fd) {
        const {data} = await axios({
            method: 'post',
            url: 'http://food-j.kz/upload.php',
            data: fd,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${fd._boundary}`,
            },
        });
        return data
    }
}
