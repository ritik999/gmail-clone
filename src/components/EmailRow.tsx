import React from 'react'
import './emailRow.css'
import { Checkbox, IconButton } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarBorder from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../redux/reducer';

type PropsType={
    title:string,
    subject:string,
    description:string,
    time:string
}

const EmailRow = ({title,subject,description,time}:PropsType) => {
    const navigate = useNavigate();
    const dispatch=useDispatch();

    const openMail=()=>{
        dispatch(selectMail({
            title,
            subject,
            description,
            time
        }))

        navigate('/mail')
    }
  return (
    <div className="emailRow" onClick={openMail}>
        <div className="emailRow_options">
            <Checkbox />
            <IconButton>
                <StarBorder />
            </IconButton>
            <IconButton>
                <LabelImportantIcon />
            </IconButton>
        </div>

        <h3 className='emailRow_title'>{title}</h3>

        <div className="emailRow_message">
            <h4>
                {subject} -
                <span className='emailRow_description'>
                    {description}
                </span>
            </h4>
        </div>

        <div className="emailRow_time">{time}</div>
    </div>
  )
}

export default EmailRow