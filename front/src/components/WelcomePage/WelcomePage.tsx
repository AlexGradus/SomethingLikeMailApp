import axios from 'axios';
import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MyState } from '../../interface/interface';
import { logout, newMessage } from '../../store/appReducer';
import { s } from './';





const WelcomePage = () => {
  let name = useSelector((state:MyState)=>state.app.currentUser);
  
  const [fakeInterval,setFakeInterval] = useState(0);

 setInterval(myFakeInterval, 5000);

function myFakeInterval()
{
  setFakeInterval(fakeInterval+1);
}

  
  const dispatch = useDispatch();
 
  const getMessage = async(name:string|null)=>{
    try{
        await axios.post("https://backstarted-production.up.railway.app/api/auth/user",{
          name
  
        }).then(res => {
          
          dispatch(newMessage(res.data.user.message));
          
    
        })
        
    } catch(e){
      if (axios.isAxiosError(e))  {
        alert(e.response?.data.message );
      } 
    }
   
  }

   if(name){
     getMessage(name);
    }
    

    
  


  return (
    <section className={s.container} >
      
        {!name&&<div className={s.button}><NavLink to ="/login">Login</NavLink></div>}
        {name&& <div className={s.button}><NavLink to ="/userlist">Send message</NavLink></div>}
        {name&& <div className={s.button}><NavLink to ="/inboundmessage">Inbound message</NavLink></div>}
        {name&& <div  onClick={()=>dispatch(logout())}>Exit</div>}
   

    </section>
  );
};
export default WelcomePage;
