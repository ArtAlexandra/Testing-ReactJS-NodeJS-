import React from 'react';

import { Stage, Layer, Circle,  Text, Group,Image} from 'react-konva';
import useImage from "use-image";

import ErrorPassedTest from './ErrorPassedTest';

import "../TakeTest/Form.css"
const ImageTest = ({selectedImage}) => {
    const [image] = useImage(selectedImage);

    return (
      <Image image={image} width={900} height={657}  />
    );
};
  
const PointsTest = ({points, selectedImage})=>{
  
return(
    <Layer>
         <ImageTest selectedImage={selectedImage}/>
    {points.map((point)=>{
        return(
            <Group
            key={point.id}
            id={point.id}
            x={point.x}
            y={point.y}
            >
            <Circle radius={15} fill={'#ff0000'} /> 

            <Text
            
            fontSize={15}
            text={point.id}
           fill="white"
            strokeWidth={1}
            align="centre"
            padding={-5}
            />
          </Group>
        )

    })}
       

      </Layer>
)
}

export default function PassedTest({discription,Todos,  number, points, selectedImage}) {

  return (
    <div className='passed-test__main'>
    
         <p>{discription}</p>
        

   
        <div className='passed-test__picture'>
          <Stage width={900} height={657} >
          
         <PointsTest points={points} selectedImage={selectedImage} />
         
          </Stage>
        </div>
      
    <p className='passed-test__list-errors'>Список ошибок</p>
    

{
  number?
   <>
   {
            Todos.map((todo)=>{
                return(
                  <div key={todo.id}>
                  
                   <ErrorPassedTest 
                   error={todo}
                   key={todo.id}
                  
                   />
                   </div>
                );
            })
        }
        
  </>:
  
  <h3>Пока что здесь пусто</h3>
  
}

</div>
  );
}

