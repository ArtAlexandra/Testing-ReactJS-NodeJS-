import React, {useState} from 'react'
import DoTest from './DoTest';

import { useLocation, useNavigate } from 'react-router-dom';

import "./Form.css"

export default function Form(){
    
    const [Todos, SetTodos] = useState([]);
    const [number, setNumber] = useState(false)
   
    
    const navigate = useNavigate()
  
    const today = new Date()
    let hour1 = today.getHours()
    let  minutes1 = today.getMinutes()
    let seconds1 = today.getSeconds()

    function SeeNewTest(){
        return <DoTest Todos={Todos} SetTodos={SetTodos}  number={number} setNumber={setNumber} />
    }

    const FinishTest = ()=>{
        console.log(Todos)
        const today2 = new Date()
       
        let hour2 = today2.getHours()
        let  minutes2 = today2.getMinutes()
        let seconds2 = today2.getSeconds()
        console.log(hour1)
        console.log(minutes1)
        console.log(seconds1)

        console.log(Math.abs(hour2-hour1))
        console.log(Math.abs(minutes2-minutes1))
        console.log(Math.abs(seconds2-seconds1))
        
        navigate("/test")
    }
    
   
    const state= useLocation().state

    return(
        <div className='form-create-test__main'>
            <div className='form-crete-test__title'>
                <div className='form-crete-test__name-test'>
                    <p>{state?.p.name_test} </p>
                </div>
                <button   onClick={FinishTest} className='form-crete-test__save'>Завершить </button> 
            </div>
    
            <div className='body-form'>
                {SeeNewTest()}
            </div>
       </div>
    )
}