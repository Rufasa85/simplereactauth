import axios from "axios"
const URL = "http://localhost:8080"
const API = {
    login:function(user){
        return axios.post(`${URL}/auth/login`,user,{withCredentials:true})
    },
    signUp:function(newUser){
        return axios.post(`${URL}/auth/signup`,newUser,{withCredentials:true})
    },
    logout:function(){
        return axios.get(`${URL}/auth/logout`,{withCredentials:true})
    },
    readsessions:function(){
        return axios.get(`${URL}/auth/readsessions`,{withCredentials:true})
    },
    secrets:function(){
        return axios.get(`${URL}/auth/secret`,{withCredentials:true})
    }
}
export default API;