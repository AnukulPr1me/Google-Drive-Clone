import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';

function newFile() {
  return (
    <div className='newFile'>
        <div className='newFile_Container'>
            <AppsIcon/>
            {/*plus icon*/}
            <p>New</p>
        </div>
    </div>
  )
}

export default newFile