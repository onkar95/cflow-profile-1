import axios from "axios"
require('dotenv').config()
const API = axios.create({baseURL:`${process.env.REACT_APP_URL}`})

API.interceptors.request.use((req) =>
{
    if(localStorage.getItem('profile'))
    {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})


export const signIn = (formData) => API.post("/user/email" , formData)
export const signUp = (formData) => API.post("/user/signup" , formData)