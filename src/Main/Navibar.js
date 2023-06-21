import React, {useContext} from 'react'

import {   useMatch, useNavigate, useResolvedPath } from "react-router-dom"

import { Navbar,Nav} from 'react-bootstrap';

import { AuthContext } from "../context/authContext";

import "./Navibar.css";


const  CustomLink = ({ href, children, ...props })=> {
  const resolvedPath = useResolvedPath(href)
  

  const isActive = useMatch({ path: resolvedPath.pathname, end: (resolvedPath.pathname).length===1 })

 
return (
    
    <li className={ isActive?"navbar__item_active":null}>
      <Nav.Link href={href}>
        {children}
      </Nav.Link>
    </li>
  
  )
}

export default function Navibar() {
  const { currentUser, logout} = useContext(AuthContext);
  const navigate = useNavigate()
  const handleSubmit = async e=>{
   
    e.preventDefault()
    try{
      const res = logout();
      console.log(res.data)
      //window.location.reload()
      navigate("/come")
     

       
        
    }
    catch(err){
     console.log(err.response.data)
   
    }
    //navigate("/come")
  }
  
  return (
    <nav className="navbar">
       
      <Navbar className="navbar__item">
        <div className='navbar__image'>
      </div>
        <Nav >
        
          <ul>
            <CustomLink href="/test" >Тесты</CustomLink>
            <CustomLink href="/result" >Результаты</CustomLink>
            <CustomLink href="/user" >Пользователи</CustomLink>
           
          </ul>
        </Nav>
        
        <div   className={"navbar__dropdown"}  onClick={(e)=>handleSubmit(e)} >
          {currentUser?.username? <b>{currentUser?.username}Фамилия Имя</b> :
          <b>Фамилия Имя</b> 
          }
              
              </div>
              
              </Navbar>
           
    
    </nav>
  )
}

