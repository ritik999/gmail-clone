import { configureStore } from '@reduxjs/toolkit'
import defaultReducer from './reducer';
import userReducer from './userReducer';

export const store = configureStore({
  reducer: {
    custome:defaultReducer,
    user: userReducer
  }
})