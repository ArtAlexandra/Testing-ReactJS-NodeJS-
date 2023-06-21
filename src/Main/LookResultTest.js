import React, {useState} from 'react'
import "./LookResultTest.css"
import { useLocation, useNavigate } from "react-router-dom";
import "../TakeTest/Form"
export default function LookResultTest(){
    const navigate = useNavigate(); 
    const [admin, setAdmin] = useState(true)
  
    const people = [
        
        
        {
            id:0,
            name_test:"Тестировщик 1",
            number_of_tasks: 6,
            time_limit: "45 мин",
            status: "Завершен",
            date: "14.12.2022",
            time: "32 мин",
            score: 83.4,
            estimation: "Зачет",
            task:"Ниже представлен скриншот страницы товара интернет-магазина ru.puma.com, на котором продаются спортивная обувь, одежда и аксессуары.."
        },
        {
            id:1,
            name_test:"Тестировщик 2",
            number_of_tasks: 8,
            time_limit: "1 час",
            status: "Еще не пройден",
            date: "",
            time: "",
            score: 0,
            estimation: "",
            task:"Ниже представлен скриншот страницы товара интернет-магазина ru.puma.com, на котором продаются спортивная обувь, одежда и аксессуары.."

        }
        
    ]

    const {state} = useLocation();
    function Table(){
        return(
            
            people.map((p)=>{
                return(
                    
                    <div key={p.id}>
                        <div  className='LookResultTest'>
                           
                      <div className={p.status==="Завершен"? "LookResultTest-general_data1" : "LookResultTest-general_data2"}>
                       
                    <p className='look-result-test__title-table'>{p.name_test}</p>
                  <p className='look-result-test__main-table'>Количество заданий:  </p>
                  <p className='Stroka_answer'>{p.number_of_tasks}</p>
                  <p className='look-result-test__main-table'>Ограничение времени: </p>
                  <p className='Stroka_answer'>{p.time_limit}</p>
                  <p className='look-result-test__main-table'>Статус: </p>
                 
                  <p className='Stroka_answer '>{p.status}</p>
                 
                  {p.status==="Завершен"? null:<button onClick={()=>navigate(`passing?id=${p.id}`, {state:{ p}})}>Пройти тест</button>}
                  </div>
                 
                  <div className='LookResultTest-result_test'>
               <p className='look-result-test__title-table'>Результат</p>
                    <p className='look-result-test__main-table'>Дата: </p>
                    <p className='Stroka_answer'>{p.date===""? "\u2013\u2013":p.date}</p>
                    <p className='look-result-test__main-table'>Время: </p>
                    <p className='Stroka_answer'>{p.time===""? "\u2013\u2013":p.time}</p>
                    <p className='look-result-test__main-table'>Счет: </p>
                    <p className='Stroka_answer'>{p.score===0? "\u2013\u2013":p.score+'%'}</p>
                    <p className='look-result-test__main-table'>Оценка: </p>
                   
                   
                    <p className='Stroka_answer'>{p.estimation===""? "\u2013\u2013": null}</p>
                    <p className='Stroka_answer result_test'>{ p.estimation==="Зачет"?  p.estimation: null}</p>
                    <p className='Stroka_answer result_test_error'>{ p.estimation==="Незачет"?  p.estimation: null}</p>


                   
                  
                    
               
                   
                    </div>
                    </div>
                   
                  </div>
                )
            })
        )
    }
    return(
        <>
        
        {people.length === 0 ? <div className='list_test_null-LookResultTest'>
            <img src="/Pict/Folder.png" alt="пока нет тестов"/> 
           
    <div className='text-people-LookResultTest'>
            <p>Доступных тестов пока нет</p>
            <p className='text-people-LookResult_2'>Возвращайтесь позже</p>
            </div>
    
        
            
            
            
            {/*}
            <div className='text-LookResultTest'>
            <h2>Тестов пока нет</h2>
            <div className='add_test-LookResultTest' onClick={()=>navigate("/createTest")}>
            <button >Создать новый </button>
            <img src="/Pict/Add.png" alt="+"/> 
            </div>
    </div>*/}
            </div>:  
            <div>
            <p className='look-result-test__title'>Доступные тесты</p>
            {Table()}
            </div>}
          
        </>
    )
}



