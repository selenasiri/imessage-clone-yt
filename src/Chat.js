import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import React, {useState} from 'react'
import './Chat.css'

const Chat = () => {
  const [input, setInput] = useState("");


  const sendMessage = e => {
    e.prevent.default();

    // Firebase magic...

    setInput("");
  };

  return (
    <div className='chat'>
    <div className='chat_header'>
      <h4>To: <span className='chat_name'>Channel name</span></h4>
      <strong>Details</strong>
    </div>

    <div className="chat_messages">
      <h2>I am a message</h2>
      <h2>I am a message</h2>
      <h2>I am a message</h2>
      <h2>I am a message</h2>
      <h2>I am a message</h2>
      <h2>I am a message</h2>
    </div>

      <div className='chat_input'>
        <form>
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} placeholder='iMessage' 
            type='text'
           />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon className='chat_mic' />
        </IconButton>
      </div>
    </div>
  )
}

export default Chat
