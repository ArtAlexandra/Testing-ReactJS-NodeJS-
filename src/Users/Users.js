import React, {useState} from 'react';

import AssignTest from './AssignTest';
import NewPerson from './NewPersone';


import 'reactjs-popup/dist/index.css';
import "./Users.css"
import DeletePerson from './DeletePerson';
import { useEffect } from 'react';
import { useMemo } from 'react';

export default function Users(){
    useEffect(()=>{
        document.title = 'Список пользователей'
    }, [])
    const [active, setActive] = useState(false)

    const [isAdd, setIsAdd] = useState(false)

   const [id, setId] = useState([])
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password:"",
        task:""
    })

   
   
    const [isOpen, setIsOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false)
    const [sort, setSort] = useState(true)
    const [task, setTask] = useState("")
 
   
    const tests = ["Тестировщик1", "Тестировщик2", "Тест"]


    const people = [
    
        {
            id:0,
            name: "Горбунов Сергей Тимофеевич",
            email: "gorbunoff@gmail.com",
            list_test : "Тестировщик1, Тестирование, Тест",
        },
        {
            id:1,
            name: "Агорелова Елизавета Михайловна",
            email: "gorelovaa.lizavet@mail.ru",
            list_test : "Тестировщик1, Тест",
        },
        {
            id:2,
            name: "Зубов Антон Михайлович",
            email: "zzub_am@gmail.com",
            list_test : "Тест",
        },
        {
            id:3,
            name: "Иванов Артём Михайлович",
            email: "artemivanoff@yandex.ru",
            list_test : "",
        },
        {
            id:4,
            name: "Кудряшова Василиса Артёмовна",
            email: "kudryash@ya.ru",
            list_test : "Тестировщик1",
        },
        {
            id:5,
            name: "Малов Павел Георгиевич",
            email: "malov.pavel@bk.ru",
            list_test : "Тест",
        },
        {
            id:6,
            name: "Бельникова Яна Тимофеевна",
            email: "yan_timofee@yandex.ru",
            list_test : "Тестировщик2, Тестирование",
        },
        {
            id:7,
            name: "Береханов Андрей Михайлович",
            email: "androohov@mail.ru",
            list_test : "Тестировщик1",
        },
        
       ]
       const [l, setL] = useState(people)

    const togglePopup = () => {
      setIsOpen(!isOpen);
     
        l.map((p)=>{
            return(
                (p?.isChecked === true? p.list_test+=task: null)
                
        )})
      setTask("")
    }

  
   
    function Sort(){
        if(sort){
            const sortedTitle = people.sort((a, b)=> {
                if(a.name > b.name){
                    return 1;
                }

                if(a.name < b.name){
                    return -1;
                }

                return 0;

            })

            setSort(false)
            return setL([ ...sortedTitle]);
        }

        else{
            const sortedTitle = people.sort((a, b)=> {
    
            if(a.name < b.name){
                return 1;
            }
            if(a.name > b.name){
                return -1;
            }
            return 0;
    
            })

            setSort(true)
            return setL([ ...sortedTitle]);
        }
}


    const handleChange = (e)=>{
      
        const {name, checked} = e.target
        setActive(true)
        setId([...id, e.target.value])


        if(name==="allSelect"){
            let temp= l.map((p)=>{
                return{...p, isChecked:checked}} 
            )
            setL(temp)
        }

        else{
            let temp = l.map((p)=>{
                return(  p.name===name? {...p,isChecked:checked}: p)
            })
    
            setL(temp)
        }
    }


    function Table(){
        return(
            filteredItems.map((p)=>{
                return(
              
                    <tr key={p.id + p.name}>
                   
                        <td > <input type="checkbox" 
                        onChange={handleChange}
                        checked={p?.isChecked || false}
                        value={p.id}
                        name={p.name}
                        /></td>
                        <td>{p.name}</td>
                        <td>{p.email? p.email: "\u2013\u2013"}</td>
                        <td>{p.list_test? p.list_test: "\u2013\u2013"}</td>
                        <td><img src="/Pict/Edit.png" alt="посмотреть детали" onClick={(e)=>{ setNewUser(prev=>({...prev,name: p.name, email: p.email, edit: true})); setIsAdd(true)}}/></td>
                    </tr>
                )
            })
        )
    }
    const [input, setInput] = useState("")
   
    const filteredItems = useMemo(() => {
        return l.filter(item => {
          return item.name.toLowerCase().includes(input.toLowerCase())
        })
      }, [l, input])

    return(
        <div className='users-Users'>
            {people.length ===0 ?
                <div className="list_people_null-Users">
                    <img src="/Pict/no_users.png" alt="пока нет пользователей"/> 
                    <h2>Пользователей пока нет</h2>
                    <div className='add_persone-Users' onClick={(e)=>setIsAdd(true)}>
                        <button > Добавить</button>
                        <img src="/Pict/PersonAdd.png" alt="+"/> 
                    </div>
                    {isAdd? <NewPerson setAddPersone={setIsAdd} tests={tests} newUser={newUser} setNewUser={setNewUser}/>:null}

                </div> : 
                <>
                <div className='users__container'>
                  <p className='result__title'>Список пользователей</p>
                    <div className='users__navbar'>
                    
                        <div className='test-list__navbar__find'>
                            <img src="/Pict/Search.png" alt='поиск'/>
                            <input type='text' placeholder='Найти' onChange={(e)=>setInput(e.target.value)}/>

                        </div>
                        <div className='users__navbar__items'>
                      

            <button  disabled={!active} className='users__navbar__add-test' onClick={togglePopup} >
                            Назначить тест <img src="/Pict/LibraryAdd.png" alt='удалить пользователя'/>
                            
                        </button>
                        
            
                        <div className='users__navbar__button users__navbar__add' onClick={(e)=>setIsAdd(true)}>
                            <p>Добавить<img src="/Pict/PersonAdd.png" alt='назначить тест'/></p>
                            
            </div>
                        <button  disabled={!active} className={active?'test-list__buttons__delete test-list__buttons__delete_active': 'test-list__buttons__delete test-list__buttons__delete_disabled' } onClick={(e)=>  setIsDelete(true)} >
                            <p>Удалить</p>
                            <img src="/Pict/DeletePers.png" alt='удалить пользователя'/>
                        </button>
                       
                        </div>
                    </div>
                    {filteredItems.length===0 ? <p>Такой пользователь не найден</p>:
                    <div className='result__table-users'>
                        <table className='result__table'>
                            <thead>
		                        <tr>
                                    <th><input type="checkbox"   name="allSelect"
                                        checked={l.filter((p)=>p?.isChecked !== true).length<1}
                                        onChange={handleChange} /></th>
			                        <th>Имя <img src="/Pict/up.jpg" onClick={()=>Sort()} alt="sort" className='sort'/></th>
           
			                        <th>Электронный адрес</th>
			                        <th>Назначенные тесты</th>
			                        <th> </th>
		                        </tr>
	                        </thead>


                            <tbody className='result__table__body'>
                                {Table()}
                            </tbody>
                        </table>
                    </div>
                    }
                    {isOpen? <AssignTest id={id} tests={tests} handleClose={togglePopup} setTask={setTask} setIsOpen={setIsOpen}/>:null}
                    {isDelete?<DeletePerson setIsDelete={setIsDelete}  id={id}/>:null}
                    {isAdd? <NewPerson setAddPersone={setIsAdd} tests={tests} newUser={newUser} setNewUser={setNewUser}/>:null}
                   
                    </div>
                </>
            }
        </div>
    )
}