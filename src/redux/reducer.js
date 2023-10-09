import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sendMessageIsOpen: false,
  selectMail:null
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

    selectMail:(state,action)=>{
      state.selectMail=action.payload
    }
  },
})


export const { openSendMessage, closeSendMessage, selectMail} = defaultSlice.actions

export default defaultSlice.reducer