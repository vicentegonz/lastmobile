import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/counterSlice';
import userReducer from '@/store/userSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
