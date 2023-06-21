import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Error from './Error';

export default function ErrorDescription() {
 
  const [number, setNumber] = useState(false)
  
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")
  const [moreText, setMoreText] = useState("")

  const [todos, setTodos] = useState([]);


  function removeError(id){
    setTodos([...todos.filter((todo)=>todo.id!==id)])
  }
  function Clear(){
    
    setNumber(true)
 
  
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      text: moreText,
      t1: text1,
      t2: text2,
      completeE: false,
    }
  setTodos([...todos, newItem]);
  setText1()
  setText2()
  setMoreText("")
  }
  
 
  return (
      <div>
          <div className="form_error">
              <Form >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <h1>Описание ошибки</h1>
                          <Form.Control type="text" placeholder="Краткое описание" value={moreText} onChange={(e)=>setMoreText(e.target.value)} />
                  </Form.Group>
                  <Row className="g-3">
                      <Col md>
                          <Form.Select aria-label="Default select example"  value={text1 || ""}onChange={(e)=>setText1(e.target.value)}>
                              <option  > Тип ошибки</option>
                              <option value="логическая" >логическая</option>
                              <option value="типографическая (орфографические, пунктуационные)" >
                                типографическая (орфографические, пунктуационные)
                              </option>
                              <option value="ошибка в отрисовке интерфейса"  >ошибка в отрисовке интерфейса</option>
                              <option value="ошибка контента" >ошибка контента</option>
                          </Form.Select>
                      </Col>
                      <Col md>
                          <Form.Select aria-label="Default select example" value={text2 || ""} onChange={(e)=>setText2(e.target.value)}>
                              <option >Серьёзность</option>
                              <option value="критична">критична</option>
                              <option value="не критична">не критична</option>
                          </Form.Select>
                      </Col>
                      <Col md>
                          <Button varient="primary" onClick={()=>{Clear()}} >Записать ошибку</Button>
                      </Col>
                  </Row>
              </Form>
          </div>
          <h1>Список ошибок:</h1>
              {
                  number?
                      <>
                          {
                              todos.map((todo)=>{
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
                      <div className="Error">
                          <h1>Пока что здесь пусто</h1>
                      </div>
            }

      </div>
  );
}

