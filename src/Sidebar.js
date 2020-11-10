import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2> I am the Sidebar</h2>
      <div className='sidebar_header'>
        <Avatar />
      </div>

      <div className='sidebar_chats'>

      </div>
    </div>
  )
}

export default Sidebar
