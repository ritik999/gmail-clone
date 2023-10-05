import { configureStore } from '@reduxjs/toolkit'
import defaultReducer from './reducer';

export const store = configureStore({
  reducer: {
    custome:defaultReducer
  }
})