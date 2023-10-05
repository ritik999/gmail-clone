import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sendMessageIsOpen: false
}

export const defaultSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    openSendMessage: (state) => {
    
      state.sendMessageIsOpen=true;
    },
    
    closeSendMessage: (state) => {
        state.sendMessageIsOpen=false;
    },
  },
})


export const { openSendMessage, closeSendMessage} = defaultSlice.actions

export default defaultSlice.reducer