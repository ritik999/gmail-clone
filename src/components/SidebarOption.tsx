import React from 'react'
import './sidebarOption.css';

type PropType={
    Icon:React.ElementType,
    title:string,
    number:number
    selected?:boolean
}

const SidebarOption = ({Icon,title,number,selected}:PropType) => {
  return (
    <>
    <div className={`sidebarOption ${selected && 'sidebarOption--active'}`}>
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
    </>
  )
}

export default SidebarOption