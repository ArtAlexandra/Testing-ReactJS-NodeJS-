import React, {useState, useEffect, useContext} from 'react'
import NewTest from './NewTest';

import  '../TakeTest/Form.css';
import "./FormCreateTest.css";
import SaveTest from './SaveTest';
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/authContext';
import axios from 'axios';



export default function FormCreateTest(){
    const { currentUser} = useContext(AuthContext);

    //console.log(currentUser)
    const state= useLocation().state
    const [save, setSave] = useState(false)
    const [nameTest, setNameTest] = useState(state?.nameTest|| "")
   
    const [porog, setPorog] = useState(state?.porog || 0)
    const [h, setH] = useState(state?.h || 0)
    const [min, setMin] = useState(state?.min ||0)

    
    const [selectedImage, setSelectedImage] = useState("/Pict/p_1.png")
    const [nameSelectedImage, setNameSelectedImage] =useState(null)
    /*
    const See =async ()=>{
        const d = await axios.post("/api/auth/get_image", {id: 3})
        console.log(d.data[0].image.data)
      
 console.log(currentUser?.image.data)
  
        var reader = new FileReader();
        reader.readAsDataURL(new Blob([new Uint8Array(d.data[0].image.data)]));
        reader.onloadend = function () {
         var base64String = reader.result;
         
        console.log(base64String)
        setSelectedImage(base64String)
         }
      
    }*/
    useEffect(() => {
        if(state?.nameTest) document.title = 'Редактирование теста'
        else document.title = 'Создание теста';
        //See()
       
      }, []);
 
    
    const [Data, SetData] = useState(state?.errorPoint||[]);
   
    const [numb, setNumb] = useState(state?.numb||false)
   
          


  const [mainText,setMainText] = useState(state?.mainText || "")
  const [errorPoint, setErrorPoint] = useState(state?.errorPoint || [])

const [editImage, setEditImage] = useState(false)

 function SeeNewTest(){
  
      
        return <NewTest editImage={editImage} setEditImage={setEditImage} setNameSelectedImage={setNameSelectedImage} errorPoint={errorPoint} setErrorPoint={setErrorPoint} mainText={mainText} setMainText={setMainText} selectedImage={selectedImage} setSelectedImage={setSelectedImage} Data={Data} setData={SetData} numb={numb} setNumb={setNumb}/>
 
}


    return(
        <div className='form-create-test__main'>
       <div className='form-crete-test__title'>
        <div className='form-crete-test__name-test'>
            {state?.nameTest? <p >Редактирование: {nameTest}</p>: nameTest? <p>{nameTest}</p>: <p>Новый тест</p>}
            </div>
             <button   onClick={()=>setSave(true)} className='form-crete-test__save'>Завершить </button> 
             
       </div>
      
        <div className='body-form'>
            {SeeNewTest()}
            

        </div>
       {save? <>
        <SaveTest setNameSelectedImage={setNameSelectedImage} mainText={mainText} selectedImage={ selectedImage} Data={Data} nameTest={nameTest} setSave={setSave} setNameTest={setNameTest} porog={ porog} setPorog={setPorog} h={h} setH={setH} min={min} setMin={ setMin}/>
        </>:null}
        </div>
    )
}