import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:5000/',
    baseURL: 'https://calm-brushlands-15364.herokuapp.com/api',
    withCredentials: true,
})

export default instance
