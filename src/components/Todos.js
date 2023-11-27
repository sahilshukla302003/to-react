import React from 'react'
import Todo from './Todo'
import Next7Days from './Next7Days'

function Todos(){
const selectedProject="today"
     const todos=[
        {
            id:'d54sd4',
            text:'GO for run',
            time:'10:00 AM',
            date:'27/11/2023',
            day:'6',
            checked: false,
            color:'#000000',
            project:'personal'
        },
        {
            id:'d54fdf',
            text:'Meeting',
            time:'09:00 AM',
            date:'29/11/2023',
            day:'1',
            checked: true,
            color:'#00ff00',
            project:'work'
        }
     ]
    return (
        <div className='Todos'>
            <div className='selected-project'>
                {selectedProject}
            </div>
            <div className='todos'>
           {
            selectedProject==='next 7 days'?
            <Next7Days todos={todos}/>
            :
            todos.map(todo=>< Todo todo={todo} key={todo.id}/>)
           }
            </div>
        </div>
    )
}

export default Todos