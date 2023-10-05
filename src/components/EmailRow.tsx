import React from 'react'
import './emailRow.css'
import { Checkbox, IconButton } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarBorder from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import {useNavigate} from 'react-router-dom';

type PropsType={
    title:string,
    subject:string,
    description:string,
    time:string
}

const EmailRow = ({title,subject,description,time}:PropsType) => {
    const navigate = useNavigate();
  return (
    <div className="emailRow" onClick={()=>navigate('mail')}>
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