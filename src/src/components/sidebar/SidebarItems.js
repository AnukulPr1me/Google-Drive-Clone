import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../../styles/SidebarItems.css'

function SidebarItems({arrow, icon, label}) {
  return (
    <div className='sidebarItems'>
       <div className="sidebarItem_arrow">
            {arrow && (<ArrowRightIcon/>)}

       </div> 
       <div className='sidebarItem_main'>
            {icon}
            <p>{label}</p>
       </div>
    </div>
  )
}

export default SidebarItems