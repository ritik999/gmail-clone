import React from 'react'
import './login.css'
import Button from '@mui/material/Button';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userReducer';

const Login = () => {

    const dispatch=useDispatch();

    const signUp=async()=>{
        const data=await signInWithPopup(auth, provider);

        dispatch(login({displayName:data.user.displayName, email:data.user.email,photoUrl:data.user.photoURL}));
    }

  return (
    <div className="login">
        <div className="login_container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" />
            <Button variant='contained' color='primary' onClick={signUp}>Login</Button>
        </div>
    </div>
  )
}

export default Login