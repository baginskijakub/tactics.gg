import React from 'react'
import './login.css'

interface Props{
    src: string | undefined
    name: string | undefined
}

export const NavbarLogin:React.FC<Props> = ({src, name}) => {

  return (
    <div className='navbar-login'>
        <img src={src} alt="user"/>
        <h5>{name}</h5>
    </div>
  )
}

export default NavbarLogin