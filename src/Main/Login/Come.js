import React, {useState, useEffect} from 'react';
import { useContext } from "react";


import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { AuthContext } from "../../context/authContext";

//import Password from './Reduction_Password';


import "./Come.css";
import Reduction_Password from './Reduction_Password.js';

export default function Come(){
  useEffect(()=>{
    document.title = 'Вход'
   
  }, [])
  const [isOpen, setIsOpen] = useState(false);
 
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { login, setAdmin } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })

  function handleClose(){
    setIsOpen(!isOpen);
  }
  const handleChange = e =>{
    setInputs(prev=>({...prev,[ e.target.name]: e.target.value}))
  
  }
  
  const handleSubmit = async e=>{
   
   e.preventDefault()
  /*
    try{
     
      
     const res =  await login(inputs)
     console.log(res.data)
      navigate("/test")
      window.location.reload();
    }
    catch(err){
     setError(err.response.data)
  
    }*/
    navigate("/test")
  }
   return(
    <div className='come'>
      <div className='come__navbar'> <img src="/Pict/label.png" alt="label" /></div>
        <div className='main'>
          <div className='letter'>
            <img src="/Pict/letter.png" alt="come"/>
            <h2 className="letter__text">Система автоматического тестирования студентов</h2>
          </div>

          <div  className='login' >
            <h2 className='login__text'>Добро пожаловать!</h2>
              <div className='login__error'>
                {error &&<p className='login__error_text'> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; Неверный логин или пароль</p>}
              </div>
           
            <input className={error?  'login__input_error login__input':'login__input'} type="email" name="email" placeholder="Электронный адрес" onChange={handleChange}/>
            <input className={error?  'login__input_error login__input':'login__input'} type="password" name="password" placeholder="Пароль" onChange={handleChange}/>
             
            <p className='login__link' onClick={(e)=>setIsOpen(true)}>Забыли пароль?</p>
           
            <button className="login__button"  onClick={(e)=>handleSubmit(e)}>
              Войти
            </button>
          
         
         
        </div>
        </div>
        {
          isOpen? 
          <Reduction_Password handleClose={handleClose} setIsOpen={setIsOpen}/> :null
        }
    </div>
  )
} 


