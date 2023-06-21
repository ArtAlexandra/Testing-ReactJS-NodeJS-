import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Error from './Error';



import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';

import { Stage, Layer, Circle,  Text, Group,Image} from 'react-konva';
import { useEffect } from 'react';
import useImage from "use-image";
import { useLocation } from 'react-router-dom';



const MyImage = ({selectedImage}) => {
 

   const [image] = useImage(selectedImage);
    return (
     
    <Image image={image} width={930} height={600}/>
  );
};


const MyCircle = ({rectangles, selectedImage})=>{
    return(
        <Layer>
            <MyImage selectedImage={selectedImage}/>
                {rectangles.map((rect)=>{
                return(
                    <Group
                    key={rect.id}
                    id={rect.id}
                    x={rect.x}
                    y={rect.y}
                    >
                        <Circle  
                        fill={rect.fill} 
                        radius={15}
                        /> 
  
                        <Text
                        fontSize={15}
                        text={rect.id}
                        fill="white"
                        strokeWidth={1}
                        align="centre"
                        padding={-5}/>
                    </Group>
                )
            })}
        </Layer>
        
    )
}



export default function DoTest({Todos, SetTodos, number, setNumber}) {
 
    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [moreText, setMoreText] = useState("")
    const [n, setN] = useState("")
   
    const [point, setPoint] = useState([])


    function removeError(id){
        SetTodos([...Todos.filter((todo)=>todo.id!==id)])
    }

    function AddError(e){
        e.preventDefault()
        setNumber(true)

        if(point.length < n){
            toast.warning("Пока такого номера ошибки не существует! Проверьте введенные данные.")
        }
        else{
            const newItem = {
            id: Math.random().toString(36).substr(2, 9),
            text: moreText,
            t1: text1,
            t2: text2,
            n: n,
            x:point[n-1].x,
            y: point[n-1].y,
            completeE: false,
            }
    

            SetTodos([...Todos, newItem]);
            setText1()
            setText2()
            setMoreText("")
            setN("")
        }
    }
  


    const [i, setI] = useState(1)

    const createRectangle = (e)=>{
        let newRectangle = {};
  
        const stage = e.target.getStage();
        const stageLocation = stage.getPointerPosition();
        setI(i=>i+1)
        newRectangle.x = stageLocation.x
        newRectangle.y = stageLocation.y
        newRectangle.fill = 'red';
        newRectangle.id =i
        let rectangleFromState = [...point];
        rectangleFromState.push(newRectangle);
        setPoint(rectangleFromState)
    }

    const [selectedImage, setSelectedImage] = useState("")
    useEffect(()=>{
      setSelectedImage("/Pict/p_1.png")
    }, [])
  
    const state= useLocation().state
 
  return (
      <div>
            <div  className='new-test' >
                <p>{state?.p.task}</p>
                <div>
                    <Stage width={930} height={600} onClick={(e) => createRectangle(e)}>
                        <MyCircle rectangles={point} selectedImage={selectedImage} />
                    </Stage>
                </div>
            </div>
         
            <div>
                <ToastContainer floatingTime={5000} />
                <div className='new-test__error-description'>
                    <Form>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <h3 className='new-test__list-error'>Описание ошибки</h3>
                            <Form.Control type="text" placeholder="Краткое описание" value={moreText}
                            onChange={(e)=>setMoreText(e.target.value)} />
                        </Form.Group>
                        <Row className="g-3">
                            <Col md>
                                <Form.Select aria-label="Default select example" value={text1 || ""}
                                onChange={(e)=>setText1(e.target.value)}>
                                    <option> Тип ошибки</option>
                                    <option value="логическая" >логическая</option>
                                    <option value="типографическая (орфографические, пунктуационные)" >
                                    типографическая (орфографические, пунктуационные)</option>
                                    <option value="ошибка в отрисовке интерфейса"  >ошибка в отрисовке интерфейса</option>
                                    <option value="ошибка контента" >ошибка контента</option>
                                </Form.Select>
                            </Col>
                            <Col md>
                                <Form.Select aria-label="Default select example" value={text2 || ""}
                                onChange={(e)=>setText2(e.target.value)}>
                                    <option >Серьёзность</option>
                                    <option value="критична">критична</option>
                                    <option value="не критична">не критична</option>
                                </Form.Select>
                            </Col>
                            <Col md>
                                <Form.Control type="text" placeholder="Номер ошибки" value={n} onChange={(e)=>setN(e.target.value)}/>
                            </Col>
                            <Col md>
                                <button className='new-test__error-description__add-error' onClick={(e)=>{AddError(e)}} >Записать ошибку</button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
   
            <h3 className='new-test__list-error'>Список ошибок:</h3>
            {
                number?
                    <>
                        {
                        Todos.map((todo)=>{
                        return(
                        <Error  
                        error={todo}
                        key={todo.id}
                        removeError = {removeError}
                        />
                 
                        );
                        })
                        }
                    </>:
                        <p className='new-test__empty'>Пока что здесь пусто</p>
  
            }
      </div>
    );
}

