import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/counterSlice';
import sessionReducer from '@/store/session';

export default configureStore({
  reducer: {
    counter: counterReducer,
    session: sessionReducer,
  },
});
