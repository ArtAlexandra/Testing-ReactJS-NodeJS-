import React, {useState} from 'react'
import "./AssignTest.css"
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';

export default function AssignTest({id, tests, handleClose,setTask, setIsOpen}){
    const [answer, setAnswer] = useState("")
    const AddTask = (e)=>{
       
        setTask(answer)
        console.log(answer)
        console.log(id)
        setIsOpen(false)
    }
    return(
        <>
            <div className="assign-test__popup-box">
     
                <div className="assign-test__box">
                    <div className='assign-test__box__title'>
                        <p>Назначить тест</p>
                        <CloseButton onClick={handleClose} className='assign-test__box__close-button'/>
                    </div>
        
                    <Form.Select  className='assign-test__box__select' onChange={(e)=>setAnswer(e.target.value)}>
                    <option>Выбрать тест</option>
                        {tests.map((test)=>{
                            return(
                                <option key={test} value={test} >{test}</option>
                            )
                        })}
                        
                    </Form.Select>
   
                    <button className='assign-test__box__button' onClick={AddTask }>Подтвердить</button>
                </div>  
       
            </div>
      
        </>
    )
}