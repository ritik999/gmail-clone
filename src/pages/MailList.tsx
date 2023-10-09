import React from 'react'
import './mailList.css';
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from '../components/Section';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from '../components/EmailRow';
import { collection, getDocs } from "firebase/firestore/lite"; 
import {useState, useEffect} from 'react';
import { db } from '../firebase';

const MailList = () => {
  
  const [emails,setEmails]=useState([]);

  const getData=async()=>{
    const dataRecieve:any=await getDocs(collection(db, "sends"));

    setEmails(
      dataRecieve.docs.map((doc:any)=>(
        {
          id:doc.id,
          data:doc.data()
        }
      ))
    )
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
    <div className="emailList">
      <div className="emailList_setting">
        <div className="emailList_settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailList_settingRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList_section">
          <Section Icon={InboxIcon} title='primary' color="red" selected />
          <Section Icon={PeopleIcon} title='social' color="#1A73E8" />
          <Section Icon={LocalOfferIcon} title='promotions' color="green" />
        </div>

        <div className="emailList_list">
          {emails.map(({id,data:{To,Subject,Message}})=>(
            <EmailRow  key={id} title={To} subject={Subject} description={Message} time='10pm' />
          ))}
          {/* <EmailRow title='First' subject='testing the app' description='plese provide your valuable feedback' time='10pm' />
          <EmailRow title='Second' subject='retest the app' description='plese provide your valuable feedback' time='11pm' /> */}
        </div>
    </div>
  )
}

export default MailList