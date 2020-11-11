import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'

const Login = () => {

  const signIn = () => {
    auth.signInWithPopup(provider)
    .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img src="https://images.macrumors.com/t/032E9ADz4VsegA9ng-z7QaHw5ro=/400x0/filters:quality(90)/article-new/2016/03/IMessage_Icon.jpg?lossy" alt="icon image" />
        <h1>iMessage</h1>
      </div>

      <Button>Sign In</Button>
    </div>
  )
};

export default Login


