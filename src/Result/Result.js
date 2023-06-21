import React, {useEffect, useMemo, useState}  from 'react'
import {Link, NavLink} from "react-router-dom";
import {useNavigate, useLocation } from "react-router-dom";


import "./Result.css"
export default function Result({props}){
    useEffect(()=>{
       document.title= 'Результаты тестирования'
    },[])
    const navigate = useNavigate()

    const [sort, setSort] = useState(true)
    const [allTest, setAllTest] = useState([])

    
    const [reset, setReset] = useState(true)
    const [post, setPost] = useState({})
    const location = useLocation()
    const postId = location.pathname.split("/")[2]


    const errorPoint = [
        {
            id: 1,
            x: 83.73706896551724, 
            y: 14.73706896551724,
            n: 1,
           
        },
        {
            id: 2,
            x: 467, 
            y: 297,
            n:2,
          
        },
        {
            id: 3,
            x: 467,
            y: -297,
            n: 3,
        }

     ]
     const newItem1 = {
        id:  1371,
        text: "Большое описание первой ошибки",
        t1: "логическая",
        t2: "критична",
        n: 1,
        x: errorPoint[0].x,
        y: errorPoint[0].y,
       
        done: false
      }

     const newItem2 = {
       id:  3828,
       text: "Большое описание второй ошибки",
       t1: "ошибка контента",
       t2: "не критична",
       n: 2,
       x: errorPoint[1].x,
       y: errorPoint[1].y,
       w: errorPoint[1].w,
       h: errorPoint[1].h,
       done: true
     }
     


     

   





    const test = ["Тестировщик1", "Тестировщик2", "Тест", "Очень длинное название теста"]
    useEffect(()=>{
        setAllTest(test)

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
          
            nameTest: "Название существующего теста",
            number: 2,
            Todos:[newItem1, newItem2],
            discription: "Ниже представлен скриншот страницы товара интернет-магазина ru.puma.com, на котором продаются спортивная обувь",
            //selectedImage:"/Pict/p_1.png",
            porog: 75,
            h: 1,
            min: 15,
            name: "Горелова Елизавета",
            point:[errorPoint[0], errorPoint[1]],
            n: 2,
            selectedImage: "/Pict/p_1.png"
           // Data: Data
        }
        setPost(data)
       

    }, [], [postId])
    
    const handleChange = (e)=>{
        const {name, checked} = e.target
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
        setL(temp)}
   }
    const people = [
    
        {
            id:7,
            name: "Горбунов Сергей Тимофеевич",
            estimation: "Незачет",
            score: 53,
            time: "14 мин",
            date: "10.12.2022",
            details: "Просмотр",
            checked: false,
            list_test : "Тестировщик1, Тестирование, Тест, "

        },
        {
            id:1,
            name: "Горелова Елизавета Михайловна",
            estimation: "Незачет",
            score: 0,
            time: "",
            date: "12.02.2023",
            details: "Посмотреть",
            checked: false,
            list_test : "Тестировщик1, Тест22",
        },
        {
            id:2,
            name: "Кудряшова Василиса Артёмовна",
            estimation: "Зачет",
            score: 100,
            time: "25 мин",
            date: "12.12.2022",
            details: "Просмотр",
            checked: false,
            list_test : "Тест",
        },
        {
            id:3,
            name: "Терехов Андрей Михайлович",
            estimation: "Зачет",
            score: 83,
            time: "32 мин",
            date: "14.12.2022",
            details: "Просмотр",
            checked: false,
            list_test : "Тестировщик1, Тестирование, Тест",
        },
        {
            id:4,
            name: "Якушева Алина Андреевна",
            estimation: "Незачет",
            score: 53,
            time: "32 мин",
            date: "14.12.2022",
            details: "Просмотр",
            checked: false,
            list_test : "Тестировщик1, Тестирование",
        },
        {
            id:5,
            name: "Малов Андрей Михайлович",
            estimation: "Зачет",
            score: 34,
            time: "32 мин",
            date: "14.12.2022",
            details: "Просмотр",
            checked: false,
            list_test : "Тестирование, Тест, Тестировщик2",
        },
        {
            id:6,
            name: "Пупкин Василий Васильевич",
            estimation: "",
            score: "",
            time: "",
            date: "",
            details: "",
            checked: false,
            list_test : "Тестирование",
        }
        
       
       ];
    const [input, setInput] = useState("")
   
const [l, setL] = useState(people)
     const filteredItems = useMemo(() => {
        return l.filter(item => {
          return item.name.toLowerCase().includes(input.toLowerCase())
        })
      }, [l,  input])

       
        function SortEstimation(e){
            const estimation = e.target.value
       
            let pers = []
       
            for(let i =0; i<l.length; i+=1){
                if( l[i].estimation === estimation){
                    pers.push(l[i])
                }
            }
            return setL([...pers])
        }


        function SortScore(e){
       
            let score = e.target.value

            if(score==="-"){
                const sorted = people.sort((a)=>{
                    if(  a.score === score  ){
                        return -1
                    }
                    return 0
                })
            return setL([...sorted])
        }
        else{
            let pers = []
       
            for(let i =0; i<l.length; i+=1){
                if( l[i].score<=Number(score)+10 && l[i].score>=score){
                    pers.push(l[i])
                }
            }
            return setL([...pers])
        }
    }


    function SortTest(e){
        const stroka = e.target.value
        function isWordInString(needle, haystack) {
            return haystack
              .split(', ')
              .some(p => (p === needle));
            }
            let pers = []
            for(let i =0; i<l.length; i+=1){
                if(isWordInString( stroka,l[i].list_test)){
                   pers.push(l[i])
                }
            }
            return setL([...pers])
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
 
  // console.log(location.state)


    function Table(){

        return(
            filteredItems.map((p)=>{
               
                return(
                  
                    <tr key={p.id + p.name}>
                       
                        <td > <input type="checkbox"  name={p.name}
                        onChange={handleChange}
                        checked={p?.isChecked || false}
                        value={p.name}
                        /></td>
                        <td>{p.name}</td>
                        {p.estimation===""? <td>{'\u2013\u2013'}</td>:null}
                        {p.estimation==="Зачет"? <td className='Zachet'>{p.estimation}</td>:null}
                        {p.estimation==="Незачет"? <td className='NotZachet'>{p.estimation}</td>:null}
                        <td>{p.score===''? "\u2013\u2013" : p.score+'%'}</td>
                        <td>{p.time==='' ? "\u2013\u2013": p.time}</td>
                        <td>{p.date===''? "\u2013\u2013": p.date}</td>
                        
                        <td>{p.estimation===''? "\u2013\u2013" : <NavLink to={`passingtest?edit=${p.id}`}   state={post} key={p.id} className='result__table__body__Link'>Просмотр</NavLink>}</td>
                        
                        
                       
                    </tr>
                )
            })
        )
       }
    
     
    return(
        <>
        {people.length === 0 ? <div className='list_test_null-LookResultTest'>
            <img src="/Pict/Folder.png" alt="пока нет тестов"/> 
           
            <div className='text-LookResultTest'>
                    <p>Тестов пока нет</p>
                  
                        <button onClick={()=>navigate("/test/createTest")} className='add_test-LookResultTest'>Создать новый  <img src="/Pict/Add.png" alt="+"/> </button>
                       
                   
                </div>
            </div>
            :
        <div className='result' >
            <p className='result__title'>Результаты</p>
            <div className='result__select-test'>
                
                <select  onChange={(e)=>SortTest(e)} onClick={()=>setReset(false)}>
                    <option>Выберите нужный тест</option>
                    {allTest.map((test)=>{
                    return(
                        <option value={test} key={test}>{test}</option>
                    )})}
                
                    </select>
   
            </div>
            <div className='result__navbar'>
                <div className='test-list__navbar__find'>
                    <img src="/Pict/Search.png"alt='поиск'/>
                    <input type='text' placeholder='Найти' onChange={(e)=>setInput(e.target.value)}/>
                </div>
               
                <div className='result__navbar__items'>
                    
                <div className='result__navbar__estimation'>
                    <select onChange={(e)=>SortEstimation(e)} onClick={()=>setReset(false)}>
                        <option>Оценка</option>
                        <option value="Зачет" >Зачет</option>
                        <option value="Незачет" >Незачет</option>
                        <option value="-">-</option>
                    </select>
                </div>
 
                <div className='result__navbar__score'>
                    <select onChange={(e)=>SortScore(e)}  onClick={()=>setReset(false)}>
                        <option>Счёт</option>
                        <option value={100}>100%</option>
                        <option value={90}>90%</option>
                        <option value={80}>80%</option>
                        <option value={70}>70%</option>
                        <option value={60}>60%</option>
                        <option value={50}>50%</option>
                        <option value={40}>40%</option>
                        <option value={30}>30%</option>
                        <option value={20}>20%</option>
                        <option value={10}>10%</option>
                        <option value={0}>0%</option>
                        <option value={"-"}>-</option>
                    </select>
                </div>
     
                    
                    <button disabled={reset} className={'result__navbar__reset'} onClick={()=>window.location.reload()}>
                        <p>Сброс  <img src="/Pict/delete2.png" alt="delete"/></p>
                          
                        </button>
                   
                
                </div>
                 
            </div>
                {filteredItems.length===0? <p>Такой пользователь не найден</p>:
            <div className='result__table-users'>
                <table className='result__table'>
                    <thead >
		                <tr>
                            <th><input type="checkbox"   name="allSelect"
                                checked={l.filter((p)=>p?.isChecked !== true).length<1}
                                onChange={handleChange}
                            /></th>
			                <th>Имя <img src="/Pict/up.jpg" onClick={()=>Sort()} alt="sort" className='sort'/></th>
                            <th>Оценка</th>
			                <th>Счет</th>
			                <th>Время</th>
                            <th>Дата</th>
                            <th>Детали</th>
			
		                </tr>
	                </thead>


                    <tbody className='result__table__body'>
               
                        {Table()}
                    </tbody>
                </table>
                
            </div>
            }
     
        </div>
        }
        </>
    )
}