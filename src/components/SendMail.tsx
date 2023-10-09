import React from 'react'
import './sendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import {useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../redux/reducer';
import { collection, addDoc } from "firebase/firestore/lite"; 
import { db } from '../firebase';

type Inputs = {
    To: string
    Subject: string,
    Message: string,
  }

const SendMail = () => {

    const dispatch=useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()

      const onSubmit: SubmitHandler<Inputs> = async(data) =>{
          await addDoc(collection(db,"sends"),{
            To:data.To,
            Subject:data.Subject,
            Message:data.Message
          });

           console.log(data);
          dispatch(closeSendMessage());
      }

  return (
    <div className="sendMail">
        <div className="sendMail_head">
            <h3>New Message</h3>
            <CloseIcon onClick={()=>dispatch(closeSendMessage())} className='emailSend_close' />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder='To' {...register("To", { required: true })}/>
            {errors.To && <p className='sendMail_error'>To is required!</p>}

            <input type="text" placeholder='Subject' {...register("Subject", { required: true })}/>
            {errors.Subject && <p className='sendMail_error'>Subject is required!</p>}

            <input type="text" className='sendMail_message' placeholder='Message...' {...register("Message", { required: true })}/>
            {errors.Message && <p className='sendMail_error'>Message is required!</p>}

            <div className="sendMail_options">
                <Button type='submit' variant='contained' color='primary' className='sendMail_btn'>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail