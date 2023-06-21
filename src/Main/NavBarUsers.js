import React, {useContext} from 'react'

import {  NavLink, useMatch, useNavigate, useResolvedPath } from "react-router-dom"

import { Navbar,Nav} from 'react-bootstrap';

import { AuthContext } from "../context/authContext";

import "./Navibar.css";


function CustomLink({ href, children, ...props }) {
  const resolvedPath = useResolvedPath(href)
  

  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    
    <li className={ isActive?"navbar__item_active":null}>
      <Nav.Link href={href}>
        {children}
      </Nav.Link>
    </li>
  
  )
}

export default function NavBarUsers() {
  const { currentUser, logout} = useContext(AuthContext);
  const navigate = useNavigate()
  const handleSubmit = async e=>{
    navigate("/come")
   
   /*e.preventDefault()

    try{
     
        const res = logout();
        console.log(res.data)
        navigate("/come")
    }
    catch(err){
     console.log(err.response.data)
   
    }*/
  }

 
  return (
    <nav className="navbar-user">
        <div className='navbar__image navbar-user__image' onClick={()=>navigate("/test")}>
        </div>
        <div  className={"navbar__dropdown navbar-user__button"}  onClick={(e)=>handleSubmit(e)} >
            <b>Вячеслав Блинский</b >{/*{currentUser?.username} */}
        </div>
    </nav>
  )
}




