import { s } from '.';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../action/user';

export default function SignInPage() {
  const [name, setName] =useState('');
  const dispatch = useDispatch();
  const handleChange = (event:any) => {
    setName(event.target.value);
  };
  const handleClick = () => {
   ( (dispatch as any)(login(name)));
  };
 

  return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Name"
        value={name}
        onChange={handleChange} />
    </Box>
    <Button  onClick={handleClick} variant="outlined">GetIn</Button></>
  );
}
