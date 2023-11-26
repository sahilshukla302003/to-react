import React, { useState } from 'react'
import RenameProject from './RenameProject'
import { XCircle,Pencil } from 'react-bootstrap-icons'
import Modal from './Modal'
 
function Project({project,edit}){
    const [showModal,setShowModal]=useState(false)

    return (
        <div className='Project'>
            <div className='name'>
                {project.name}
                </div>
            <div className='btns'>
               {
                 edit ?
                 <div className='edit-delete'>
                     <span className='edit'
                     onClick={()=>setShowModal(true)}
                     >
                         <Pencil size="13"/>
                     </span>
                     <span className='delete'>
                         <XCircle size="13"/>
                     </span>
                     </div>
                     :
                     project.numsTodos === 0 ?
                     ""
                     :

                 <div className='total-todos'>
                       {project.numsTodos}
 
                 </div>
               }
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal}>
                     <RenameProject project={project} setShowModal={setShowModal}/>

                    </Modal>    
        </div>
    )
}

export default Project