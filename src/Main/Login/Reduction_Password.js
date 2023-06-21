import React, {useState} from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import "./Reduction_Password.css"
export default function Reduction_Password({handleClose,  setIsOpen}){
    const [errorPassword, setErrorPassword] = useState("");
    const [notPersone, setNotResone] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(errorPassword)
        setNotResone(true)
        //setIsOpen(false)
      
    }
    return(
        <>
            <div className="popup-box">
                <div className="box">
                   
                    <div className='box__title'>
                        <p>Восстановление пароля</p>
                        <CloseButton onClick={handleClose}  className='box__button_close'/>
                    </div>
                    <div className={notPersone? 'box__input_error box__input':'box__input'}>
                    <input  type="email" placeholder="Электронный адрес"
                     onChange={(e)=>setErrorPassword(e.target.value)} />
                     </div>
                     <div className='box__error'>
                    {notPersone? <p>Профиль не существует</p>: <p></p>}
                    </div>
                    <button className='box__button' onClick={handleSubmit }>Отправить</button>
                </div>
               
    
            </div>
        </>
    )
}
