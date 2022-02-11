import axios from "axios";

const instance = axios.create({
    baseURL: 'https://calm-brushlands-15364.herokuapp.com/api',
    withCredentials: true,
})

export default instance
