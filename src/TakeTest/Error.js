import React from 'react';
import "./DoTest.css";
import CloseButton from 'react-bootstrap/CloseButton';
export default function Error({error, removeError}){

    return(
        <div className="Error">
             
        <div >
            
        <p  className='error-passed-test__title'>{error.text}</p>
     
        <div onClick={()=>removeError(error.id)} className="CloseButton">
        <CloseButton />

        </div>
        
        <div className='error-line'>
            <div className="error-1">
        <span>Тип ошибки: {error.t1}</span>
        </div>
        <div className="error-2">
           
    <span>    Серьёзность: {error.t2} </span>
    </div>
    <div className="error-3">
           
    <span>    Номер ошибки: {error.n}</span>
    </div>
    </div>
        

        </div>
   
        </div>

    )
}