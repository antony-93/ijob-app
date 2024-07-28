import axios from "axios";

const axiosDefault = axios.create({
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosDefault.interceptors.request.use(
    async reqConfig => {
        reqConfig.baseURL = 'http://10.0.2.2:3000/api';
        return reqConfig
    }, err => {
        Promise.reject(err)
    }
)

export default axiosDefault;