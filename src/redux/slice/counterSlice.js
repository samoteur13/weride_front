import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toto: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.toto += 1
    },
    decrement: (state) => {
      state.toto -= 1
    },
    incrementByAmount: (state, action) => {
      state.toto += action.payload
    },
    resetCount : (state,action) => {
        state.toto = 0;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , resetCount } = counterSlice.actions

export default counterSlice.reducer