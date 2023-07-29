import React from 'react'
import GDriveLogo from '../../media/google_drive_icon.png'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const index = () => {
  return (
    <div className='header'> 
      <div className='header_logo'>
        <img src={GDriveLogo} alt="" />
        <span>Drive</span>
      </div>
      <div className='header_searchContainer'>
        <div className="header_searchBar">
          <SearchIcon/>
          <input type="text" placeholder='Search in Drive'/>
          <ExpandMoreIcon/>
          
        </div>
      </div>
      <div className='header_icons'></div>
      
    </div>
  )
}

export default index