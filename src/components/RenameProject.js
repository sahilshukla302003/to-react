import React, { useState } from 'react'
import ProjectForm from './ProjectForm'
function RenameProject({project,setShowModal}){
const [NewprojectName,setNewProjectName]=useState(project.name)
  function handleSubmit(e){

  }   
return (
        <div className='RenameProject'>
             <ProjectForm
            handleSubmit={handleSubmit}
            heading='Edit Project name!'  
           value={NewprojectName}
            setValue={setNewProjectName}
            setShowModal={setShowModal}
            confirmButtonText='Confirm' 
             />
        </div>
    )
}

export default RenameProject