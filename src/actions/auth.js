import * as api from "../api/axios"
import axios from "axios"


export const signin = (formData , history,isUser) => async (dispatch) =>
{
    // console.log(formData,"formData")
    try{
        console.log(formData,"formData")
        const {data} = await api.signIn(formData)
        console.log(data.status,"auth.js",isUser)
        if(data.status === "Password Incorrect" || data.status === "User doesn't exists" || data.status === "Type Incorrect")
        {
            dispatch({type: "AUTH" , data})
            // localStorage.clear()
            return data

        }
        else if(data.status=== "Please Check your email for verification link"){
            dispatch({type: "AUTH" , data})
            let temp=data?.data.id
            await axios.post(`${process.env.REACT_APP_URL}/user/linktoemail/${temp}`)
            return data
        }
        else
        {
            dispatch({type: "AUTH" , data})      
            if(isUser){
                history.push("/home-user")
            }
            else{
                history.push("/home-vendor")
            }
            
        }
    }
    catch(error)
    {
        console.log(error)
    }
}
   
export const signup = (formData  ,history,isUser) => async (dispatch) =>
{
    // console.log(formData,"signup")
    try{
        const {data} = await api.signUp(formData)
        
        if(data.status === "User Already Exists" || data.status === "Passwords do not match")
        {
            await dispatch({type: "AUTH" , data})
            return data;  
        }
        else
        {
            let temp,temp1;
            dispatch({type: "AUTH" , data})

            if(data?.status==="User Created")
            {
                temp=data?.data.id;
                console.log(temp)
                await axios.post(`${process.env.REACT_APP_URL}/user/linktoemail/${temp}`)
                .then(function (response) {            
                    temp1=response?.data
                })
      
            }
            
        }
        //token and status
        
    }
    catch(error)
    {
        console.log(error)
    }
}