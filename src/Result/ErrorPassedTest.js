import React from 'react';
import "../TakeTest/DoTest.css";
import "./FormPassedTest.css"
export default function ErrorPassedTest({error}){
    return(
        <div className="Error" >
            <div >
                <p className='error-passed-test__title'>{error.text}</p>
                <div className='error-passed-test__discription'>
                   
                        <p>Тип ошибки: {error.t1}</p>
                   
                    
                        <p>    Серьёзность: {error.t2} </p>
                   
                        <p>    Номер ошибки: {error.n}</p>
                   
                    {error.done ? <img src="../Pict/true.png" alt="true" className='passed-test__answer passed-test__answer_true'/>
                     : <img src="../Pict/false.png" alt="false" className='passed-test__answer passed-test__answer_false'/>}
                    
                </div>
            </div>
   
        </div>

    )
}