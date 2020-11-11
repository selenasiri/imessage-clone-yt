import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './App.css';
import { selectUser, login, logout } from './features/userSlice';
import Imessage from './Imessage';
import Login from './Login';
import { auth } from './firebase';

import { Provider } from 'react-redux'
import store from './app/store'

function App() {
  const user = useSelector(selectUser); 
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch(
          login ({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);
  
  return (
    <Provider store={store}>
      <div className="App">
        {user ? <Imessage /> : <Login />}
      </div>
    </Provider>  
  );
}

export default App;
