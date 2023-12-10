import React, {useState} from 'react'
import Modal from './Modal'
import TodoForm from './TodoForm'
import dayjs from 'dayjs';

function AddNewTodo(){
    const [showModal, setShowModal] = useState(false)
    const[text,setText]=useState('')
    const [day, setDay] = React.useState(dayjs(new Date()));
    const [time, setTime] = React.useState(dayjs(new Date()));
    
    const projects=[
        { id:1 , name: "personal", numsTodos :  0 },
        { id:2 , name: "work", numsTodos :  1 },
        { id:3 , name: "other", numsTodos :  2 },
]

function  handleSubmit(e){
 
}  
    return (
        <div className='AddNewTodo'>
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    + New Todo
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <TodoForm
                handleSubmit={handleSubmit}
                heading='Add new to do!'
                text={text}
                setText={setText}
                //CALENDAR THIK KARNA HAI -----VIDEO 12...
                day={day}
                setDay={setDay}
                time={time}
                setTime={setTime}
                projects={projects}
                showButtons={true}
                setShowModal={setShowModal}
                />
              
            </Modal>
        </div>
    )
}

export default AddNewTodo