import React from 'react'
import './section.css'

type PropsType={
    Icon:React.ElementType,
    title:string,
    color:string,
    selected?:boolean
}
const Section = ({Icon,title,color,selected}:PropsType) => {
  return (
    <div className={`section ${selected && "section_selected"}`} style={{borderBottom:`3px solid ${color}`, color:`${selected && color}`}}>
        <Icon />
        <h4>{title}</h4>
    </div>
  )
}

export default Section