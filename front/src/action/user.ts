import axios from "axios";
import {  setUser } from "../store/appReducer";

export const login = (name:string)=>{
    return async (dispatch: (arg0: { type: string; user: any; }) => void) =>{
        try{
            const response = await axios.post("http://localhost:5000/api/auth/getin",{
                name 
            })
            
            dispatch(setUser(response.data.user.name))
            localStorage.setItem("user",response.data.user.name)
        } catch(e){
          if (axios.isAxiosError(e))  {
            alert(e.response?.data.message );
          } 
        }

    }
  
   
}



