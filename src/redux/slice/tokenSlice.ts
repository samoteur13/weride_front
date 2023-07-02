import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    addToken : (state, action) => {
        state.value += action.payload;
    },
    resetToken : (state) => {
        state.value = '';
    }
  },
})

export const { addToken, resetToken } = tokenSlice.actions

export default tokenSlice.reducer