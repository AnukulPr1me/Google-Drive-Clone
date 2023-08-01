import React from 'react'
import AddIcon from '@mui/icons-material/Add';

function NewFile() {
  return (

    <div className='newFile'>
        <div className='newFile_Container'>
            <AddIcon/>
            {/*plus icon*/}
            <p>New</p>
        </div>
    </div>
  )
    
}

export default NewFile