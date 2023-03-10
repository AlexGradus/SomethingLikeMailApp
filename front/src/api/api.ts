import axios from "axios";


export const sendMessage = async(name:string|null,message:[])=>{
  try{
      const response = await axios.post("https://backstarted-production.up.railway.app/api/auth/message",{
        name,
        message
      })
   
  } catch(e){
    if (axios.isAxiosError(e))  {
      alert(e.response?.data.message );
    } 
  }
 
}

export const getMessage = async(name:string|null)=>{
  try{
      const response = await axios.post("https://backstarted-production.up.railway.app/api/auth/user",{
        name

      })
    return response.data.message
  } catch(e){
    if (axios.isAxiosError(e))  {
      alert(e.response?.data.message );
    } 
  }
 
}