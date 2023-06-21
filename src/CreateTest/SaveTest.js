import React from 'react'
import "./SaveTest.css"
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
export default function SaveTest({ mainText, selectedImage, nameSelectedImage, Data, setSave , nameTest, setNameTest, porog, setPorog, h, setH, min, setMin, handleClose}){
    const navigate = useNavigate()
    const Save = async ()=>{
        console.log((Data).length)
        console.log(Data)
        console.log(mainText)
        console.log(porog)
        console.log(nameTest)
        console.log(h)
        console.log(min)
        console.log(selectedImage)
        console.log(selectedImage.name)
     
        const formData = new FormData();
        formData.append("file", selectedImage);
        formData.append("fileName", selectedImage.name)
        console.log(formData)
        /*
        const res =  await axios.post("/api/auth/post_image", formData);
        console.log(res.data)
*/

        setSave(false)
        navigate("/test")
    }
    return(
        <>
            <div className="popup-box-DeletePerson">
                <div className="box-DeletePerson">
                    <div className='title-DeletePerson'>
                        <p>Сохранение</p>
                        <CloseButton onClick={()=>setSave(false)} className='CloseButton-DeletePerson'/>
                    </div>
                    <input className="save-test__nameTest" type="text" placeholder='Название теста'
                     value={nameTest|| ""} onChange={(e)=>setNameTest(e.target.value)}/>
                    <div className='deteil'>
                        <p>Порог</p> 
                        <input className='input1' type="text" value={porog || ""}
                        onChange={(e)=>setPorog(e.target.value)}/>
                        <p>%</p>
                        <div className='save-test__empty'>
                        
                        <input className='input1 ' type="text" value={h||""}
                        onChange={(e)=>setH(e.target.value)}/>
                        <p>ч</p>
                        <input className='input1' type="text" value={min||""}
                        onChange={(e)=>setMin(e.target.value)}/>
                        <p>мин</p>
                        </div>
                    </div>
                    <button className="saveTest" onClick={Save}>Сохранить тест</button>
                </div>
            </div>
        </>
    )
}