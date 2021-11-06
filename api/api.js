import instance from "./instance";

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
    async create(obj) {
        try {
            const {data} = await instance.post('casting', obj)
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
}