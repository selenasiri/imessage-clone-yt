import { Avatar } from '@material-ui/core'
import { PhotoAlbumRounded } from '@material-ui/icons'
import React from 'react'
import './Message.css'

const Message = ({ id, contents: {
  timestamp, displayName, email, message, photo, uid }, 
}) => {
  return (
    <div className="message">
      <Avatar src={photo} />
      <p>{message}</p>
      {/* <small>{newDate(timestamp?.toDate()).toLocaleString()}</small> */}
    </div>
  )
}

export default Message
