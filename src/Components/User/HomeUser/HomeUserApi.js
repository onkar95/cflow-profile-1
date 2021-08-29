import axios from "axios"
import { useState } from "react"

require('dotenv').config()
// export const signIn = (formData) => API.post("/user/email" , formData)
export const getUser=async(userId)=>{
    
     let temp   
    await axios.get(`${process.env.REACT_APP_URL}/user/get_user/${userId}`)
    .then(function (response) {            
        temp=response?.data
        
      })
    return temp?.data[0]
    


}
