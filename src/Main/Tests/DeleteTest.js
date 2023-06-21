import React from 'react'
import "./DeleteTest.css"



export default function DeleteTest({id, setIsDelete, setAgree}){
   
       const deleteTest = (e)=>{
        console.log(id)
        setAgree(true)
        setIsDelete(false)

       }

  
    return(
        <>
        <div className="delete-test__popup-box">
      
            <div className="delete-test__box">
                <div className='delete-test__box__title'>
                    <p>Вы уверены?</p>
                </div>
        
                <button className='delete-test__box__cancel' onClick={(e)=> setIsDelete(false)}>Отмена</button>
                <button className='delete-test__box__delete' onClick={deleteTest}>Удалить</button>
            </div>
       
      </div>
      
</>
    )
}