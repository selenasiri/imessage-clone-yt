import { configureStore } from 'redux'
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});