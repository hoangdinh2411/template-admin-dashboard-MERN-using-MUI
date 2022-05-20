import axios from 'axios'
import jwtDecode from 'jwt-decode';

const token = JSON.parse(localStorage.getItem('accessToken'))
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout:10000,
    headers:{
        "content-type": "application/json",
    }
})  

axiosInstance.interceptors.request.use((req)=>{
    // if(token){
    //     const decodedToken = jwtDecode.decode(token)
    //     req.headers.Authorization= `Bearer ${decodedToken.role}`
    // }
    return req
}, error=>{
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use(res=>{
    return res
}, error=>{
    return Promise.reject(error)
})
export default axiosInstance