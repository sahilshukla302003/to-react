import React from 'react'
import { Bell ,CalendarDay, Clock, Palette,X} from 'react-bootstrap-icons'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';


function TodoForm({
    handleSubmit,
    heading=false,
    text,setText,
    day, setDay,
    time,setTime,
    projects,
    showButtons=false,
    setShowModal=false
}){
    return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
               <form onSubmit={handleSubmit} className='TodoForm'>
                <div className='text'>
                    {
                        heading && 
                        <h3>{heading}</h3>
                    }
                         <input
                          type='text'
                          value={text}
                          onChange={e=>setText(e.target.value)}
                          placeholder='to do ....'
                          autoFocus
                           />

                    
                    
                    </div>
                    <div className='remind'>
                        <Bell/>
                        <p>remind me!</p>
                        </div>
                    <div className='pick-day'>
                        <div className='title'>
                            <CalendarDay />
                            <p> Choose a day</p>
                        </div>
                        
                        <DatePicker
                     value={day}
                     onChange={(day) => setDay(day)}
        />
   
                        </div>
                        <div className='pick-time'>
                        <div className='title'>
                            <Clock />
                            <p> Choose time</p>
                        </div>
                        <MobileTimePicker 
                        value={time}
                        onChange={(time) => setTime(time)} />
                        </div>    
                        <div className='pick-project'>
                        <div className='title'>
                            <Palette />
                            <p> Choose a project</p>
                        </div>
                        <div className='projects'>
                           {
                            projects.map(project =>
                                <div className='project' key={project.id}>
                                  {project.name}
                                </div>
                                )
                           }

                        </div>

                        </div>

                      {
                        showButtons &&
                        <div>
                        <div className='cancel' onClick={()=>setShowModal(false)}>
                      <X  size ='40'/>
                        </div>
                       <div className='confirm'>
                           <button>
                              +Add to do
                             </button>
                     </div>
                        </div>
                      }
                     </form>
                </LocalizationProvider>
               
       
    )
}

export default TodoForm