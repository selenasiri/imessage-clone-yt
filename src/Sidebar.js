import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css";
import SearchIcon from '@material-ui/icons/Search'
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import IconButton from '@material-ui/core/IconButton'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2> I am the Sidebar</h2>
      <div className='sidebar_header'>
        <Avatar className='sidebar_avatar' />
        <div className='sidebar_input'>
          <SearchIcon />
          <input placeholder='Search' />
        </div>

        <IconButton variant='outlined' className='sidebar_inputButton'>
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>

      <div className='sidebar_chats'>

      </div>
    </div>
  )
}

export default Sidebar
