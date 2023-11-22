import React from 'react'
import { CalendarDate, CaretUp } from 'react-bootstrap-icons'
function Calendar(){

    return (
        <div className='Calendar'>
            <div className='header' >
                <div className='title'>
                    <CalendarDate size="18"/>
                    <p>Calendar</p>
                    
                    </div>
               <div className='btns' >
                 <span>
                        <CaretUp size="20"/>

                 </span>

               </div>

            </div>
           
        </div>
    )
}

export default Calendar