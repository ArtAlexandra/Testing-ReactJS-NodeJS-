import React, {useState, useEffect, useMemo} from 'react'
import {Link, useNavigate, useLocation, NavLink } from "react-router-dom";


import DeleteTest from './DeleteTest';

import "./TestList.css"

export default function TestList({props}){
  
    const [input, setInput] = useState("")
    const [isDelete, setIsDelete] = useState(false)
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate(); 
   
    const [sort, setSort] = useState(true)
    const [del, setDel] = useState(false)

    const [active, setActive] = useState(false)
   
    const listTest=[
        
        
        {
            id: 0,
            name: "Тестик1",
            numb_task: 6, 
            numb_people: 4, 
            time: "45 мин"
        },
        {
            id: 1,
            name: "Тестик2",
            numb_task: 8, 
            numb_people: 1, 
            time: "1 час"
        },
        {
            id: 2,
            name: "Тест",
            numb_task: 10, 
            numb_people: 2, 
            time: "1 час 10 мин"
        },
        {
            id: 3,
            name: "Тестирование",
            numb_task: 12, 
            numb_people: 0, 
            time: "40 мин"
        },
    
        
    ]
   
    const [tests, setTests] = useState(listTest)
    const [deleteTest, setDeleteTest] = useState([])
    const [id, setId] = useState([])
    const handleChange = (e)=>{
        const {name, checked} = e.target
        setActive(true)
        setId([...id, e.target.value])
        if(name==="allSelect"){
            let temp= tests.map((p)=>{
            return{...p, isChecked:checked}} 
            )
            setTests(temp)
        }
        else{
            let temp = tests.map((p)=>{
            return(  p.name===name? {...p,isChecked:checked}: p)
            })
            setTests(temp)
        }
    }

    
    function Sort(){
        if(sort){
            const sortedTitle = listTest.sort((a, b)=> {
                if(a.name > b.name){
                    return 1;
                }
                if(a.name < b.name){
                    return -1;
                }
                return 0;
            })
            setSort(false)
            return setTests([ ...sortedTitle])
        }
        else{
            const sortedTitle = listTest.sort((a, b)=> {
     
                if(a.name < b.name){
                    return 1;
                }
                if(a.name > b.name){
                    return -1;
                }
                return 0;
            })
            setSort(true)
            return setTests([ ...sortedTitle]);
        }
    }
    const [post, setPost] = useState({})
    const location = useLocation()
    const postId = location.pathname.split("/")[2]
   
   
    const errorPoint = [
        {
            id: 1,
            x: 102, 
            y: 103,
            w: 105,
            h: 106,
        },
        {
            id: 2,
            x: 1112, 
            y: 1113,
            w: 1115,
            h: 1116,
        },

     ]
     const newItem1 = {
        id: 0,
        text: "Большое описание первой ошибки",
        t1: "логическая",
        t2: "критична",
        n: 1,
        x: errorPoint[0].x,
        y: errorPoint[0].y,
        w: errorPoint[0].w,
        h: errorPoint[0].h
      }
   //   setData([...Data, newItem1])
     const newItem2 = {
       id: 1,
       text: "Большое описание второй ошибки",
       t1: "ошибка контента",
       t2: "не критична",
       n: 2,
       x: errorPoint[1].x,
       y: errorPoint[1].y,
       w: errorPoint[1].w,
       h: errorPoint[1].h
     }
     

 //setData([...Data, newItem2])




    useEffect(()=>{
        document.title = 'Список тестов'
        /*
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/api/posts/${postId}`)
                setPost(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData()*/
      
        
        
        const data = {
            id: 0,
            nameTest: "Название существующего теста",
            numb: 2,
            errorPoint:[newItem1, newItem2],
            mainText: "Ниже представлен скриншот страницы товара интернет-магазина ru.puma.com, на котором продаются спортивная обувь",
            //selectedImage:"/Pict/p_1.png",
            porog: 75,
            h: 1,
            min: 15,
           // Data: Data
        }
        setPost(data)
    }, [postId])
    function Table(){
        return(
            filteredItems.map((test)=>{
                return(
                  
                    <tr key={test.id + test.name}>
                       
                        <td > <input type="checkbox" 
                           onChange={handleChange}
                           checked={test?.isChecked || false}
                           value={test.name}
                           name={test.name}
                        /></td>
                        
                        <td>{test.name}</td>
                        <td>{test.numb_task}</td>
                        <td>{test.numb_people}</td>
                        <td>{test.time}</td>
                       
                        <td><NavLink  to={`createTest?edit=${test.id}`} state={post} > 
                        <img src={"/Pict/Edit.png"} alt="edit" className="single__button"/></NavLink></td>
                        
                    </tr>
                )
            })
        )
    
    }


    const Delete = () =>{
       
        let pers = []
       let temp = []
        tests.map((test)=>{
            return(
                (test?.isChecked === true&& agree===true? temp.push(test):  pers.push(test) )
            )})
        setTests(pers)
        setDeleteTest(temp)
        if(temp.length) setDel(true)
       
        setAgree(false)
       setActive(false)
    }
    
   
    useEffect(()=>{
   /*     
        if(agree) {
            Delete()
        }*/
        if(deleteTest.length) console.log(deleteTest)
    }, [del, agree])
  
     const filteredItems = useMemo(() => {
        return tests.filter(item => {
          return item.name.toLowerCase().includes(input.toLowerCase())
        })
      }, [tests,  input])

        
    return(
        <div>
            {listTest.length === 0 ? <div className='list_test_null-LookResultTest'>
                <img src="/Pict/Folder.png" alt="пока нет тестов"/> 
                <div className='text-LookResultTest'>
                    <p>Тестов пока нет</p>
                  
                        <button onClick={()=>navigate("createTest")} className='add_test-LookResultTest'>Создать новый  <img src="/Pict/Add.png" alt="+"/> </button>
                       
                   
                </div>
            </div> :
            <>
        
        <div className='test-list__container'>
        <p className='result__title'>Список тестов</p>
                <div className='test-list__navbar'>
                
                    <div className='test-list__navbar__find'>
                        <img src="/Pict/Search.png" alt='поиск' />
                        <input type='text' placeholder='Найти' onChange={(e)=>setInput(e.target.value)}/>

                    </div>
            
          
                    <div className="test-list__buttons">
                        <button className='test-list__buttons__add'  onClick={()=>navigate("createTest")} >
                            <p>Создать новый</p>
                            <img src="/Pict/plus.png" alt='назначить тест'/>
                        </button>
                        <button disabled={!active} className={active?'test-list__buttons__delete test-list__buttons__delete_active': 'test-list__buttons__delete test-list__buttons__delete_disabled' } onClick={(e)=>  setIsDelete(true)}>
                            <p>Удалить</p>
                         <img src="/Pict/DeletePers.png" alt='удалить пользователя'/>
                        </button>
                    </div>
                </div>

                {filteredItems.length===0? <p>Такой тест не найден</p>:
                    <div className='result__table-users'>
                        <table className='result__table'>
                            <thead >
		                        <tr>
                                    <th><input type="checkbox"   name="allSelect"
                                    checked={tests.filter((test)=>test?.isChecked !== true).length<1}
                                    onChange={handleChange} /></th>
     
			                        <th>Название<img src="/Pict/up.jpg" onClick={()=>Sort()}  alt="sort" className='sort'/></th>
          
			                        <th>Задания</th>
			                        <th>Участники</th>
			                        <th>Время</th>

			                        <th> </th>
		                        </tr>
	                        </thead>


                            <tbody className='result__table__body'>
               
                                {Table()}
                            </tbody>
                        </table>
                    </div>
                }
               
                {isDelete? <DeleteTest id={id} setIsDelete={setIsDelete}  setAgree={setAgree}/>:null}
                </div>
            </>}

        </div>
    )
}