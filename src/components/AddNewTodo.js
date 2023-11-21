import React, {useState} from 'react'
import Modal from './Modal'
import { Bell ,CalendarDay, Clock, Palette,X} from 'react-bootstrap-icons'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs from 'dayjs';
function AddNewTodo(){
    const [showModal, setShowModal] = useState(false)
    const[text,setText]=useState('')
    
    return (
        <div className='AddNewTodo'>
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    + New Todo
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
               <form>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className='text'>
                    <h3>Add new to do</h3>
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
     
      />
   
                        </div>
                        <div className='pick-timr'>
                        <div className='title'>
                            <Clock />
                            <p> Choose time</p>
                        </div>
                        <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                        </div>    
                        <div className='pick-project'>
                        <div className='title'>
                            <Palette />
                            <p> Choose a project</p>
                        </div>
                        <div className='projects'>
                           <div className='project active'>
                            personal
                           </div>
                           <div className='project'>
                            work
                           </div>

                        </div>

                        </div>

                      <div className='cancel' onClick={()=>setShowModal(false)}>
                       <X  size ='40'/>
                      </div>
                     <div className='confirm'>
                    <button>
                  +Add to do

                    </button>

                     </div>
                     </LocalizationProvider>
               </form>
            </Modal>
        </div>
    )
}

export default AddNewTodo