import React from 'react'
import './main.css';
import Sidebar from '../components/Sidebar';

const Main = ({children}:any) => {
  return (
    <div className='app_body'>
        {/* <Sidebar /> */}
        {children}
    </div>
  )
}

export default Main