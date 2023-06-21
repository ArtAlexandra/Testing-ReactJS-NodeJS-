import React, {useState} from 'react'
import { useLocation, useNavigate } from "react-router-dom";


import "../TakeTest/Form.css"
import "./FormPassedTest.css"
import PassedTest from './PassedTest';
import { useEffect } from 'react';
export default function FormPassedTest(){
    
    const navigate = useNavigate()
    const location = useLocation()
    const state= useLocation().state
    console.log(location)
    const nameTest = state?.nameTest 

    const Todos = state?.Todos||[]
    const  number = state?.number ||false
   
    const points = state?.point||[]

   const discription = state?.discription
   const selectedImage = state?.selectedImage
   useEffect(()=>{
    document.title = `Результаты тестирования | ${state?.name }`
}, [])
    function SeeNewTest(){
        
            return <PassedTest discription={discription} Todos={Todos}   number={number} points={points} selectedImage={selectedImage}/>
       
       
    }
    return(
        <div className='form'>
            <h1 className='form-passed-test__title'>{nameTest}</h1>
                <div className='form-passed-test__title__button'>
                    <div className='form-passed-test__title__button_name'>
                        <p >{state?.name}</p>
                    </div>
 
                    <button className='form-passed-test__title__button_exit' onClick={()=>navigate("/result")}>Завершить просмотр</button> 
                </div>
            <div className='body-form'>
                {SeeNewTest()}
            </div>
        </div>
    )
}