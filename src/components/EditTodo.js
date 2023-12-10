import React,{useState} from 'react'
import TodoForm from './TodoForm'


function EditTodo(){
    
    const[text,setText]=useState()
    const [day, setDay] = React.useState();
    const [time, setTime] = React.useState();
    const projects=[
        { id:1 , name: "personal", numsTodos :  0 },
        { id:2 , name: "work", numsTodos :  1 },
        { id:3 , name: "other", numsTodos :  2 },
]
function  handleSubmit(e){
 
}  
    return (
        <div className='EditTodo'>
            <div className='header'>
               Edit Todo
            </div>
            <div className='container'>
            <TodoForm
                handleSubmit={handleSubmit}
                text={text}
                setText={setText}
                day={day}
                setDay={setDay}
                time={time}
                setTime={setTime}
                projects={projects}
               
                
                />
              

            </div>
        </div>
    )
}

export default EditTodo