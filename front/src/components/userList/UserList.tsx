

import { s } from '.';
import axios from "axios";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import {sendMessage} from '../../api/api';
import {  useSelector } from 'react-redux';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/system';
import Box from '@mui/material/Box';
import { MyState } from '../../interface/interface';


export default function UserList() {
  const [userData, setUserData] = useState([]);
  const [value, setValue] = useState(null as string|null);
  const [name, setName] =useState('');
  const [message, setMessage] =useState('');
  const [fullMessage, setFullMessage] =useState([]as any);
  const currentUser = useSelector((state:MyState)=>state.app.currentUser);



 
  const handleChangeTopic = (event:any) => {
    setName(event.target.value);
  };
  const handleChangeMessage = (event:any) => {
    setMessage(event.target.value);
  };
  
  const handleClick = async () => {
    const date = new Date();
    const now = date.toLocaleString();
    
    setFullMessage(fullMessage.push(now,currentUser,name,message))
    await sendMessage(value,fullMessage)
    setFullMessage([])
    setName('');
    setMessage('');
    };
  const getUsers = async ()=>{
  try{
    await axios.get("http://localhost:5000/api/auth/users")
    .then(res => {
     
      setUserData(res.data.user);

    })

  } catch(e){
    if (axios.isAxiosError(e))  {
      alert(e.response?.data.message );
    } 
  }
 
}
useEffect(() => {
  getUsers();


},[]);

const names = [] as string[];
   userData.forEach((item=>{
  for (let prop in item) {
    if(prop=== "name" ){
      names.push(item[prop])
    }
  }
}))
  return (
    <>
    
    <Stack spacing={2} width='250px' margin='0 auto'>
    <h1>Send message</h1>
      <Autocomplete
        disablePortal
        options={names}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="names" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)} />
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '500px' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          
          id="outlined-name"
          label="topic"
          value={name}
          onChange={handleChangeTopic}
          />
      </Box>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '500px' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          
          id="outlined-name"
          label="message"
          value={message}
          onChange={handleChangeMessage}
          multiline
          rows={5}
         
          />
      </Box>
      <Button  onClick={handleClick} variant="outlined">Send</Button>
    </Stack>
    
   
      </>
  );
}
