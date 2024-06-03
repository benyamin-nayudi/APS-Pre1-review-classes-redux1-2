import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    guesses: [],
    step: 1,
  };
  
export const colorSlice = createSlice({
  name: 'colorReducer',
  initialState,
  reducers: {
    addGuess: (state,action) => {
        // console.log(action.payload)
        state.guesses.push(action.payload)
    },
    deleteGuess: (state) => {
        state.guesses.pop()
    },
    clearGuess: (state) => {
        state.guesses = []
    },
    nextStep: (state) => {
        state.step += 1
    },
    clearStep: (state) => {
        state.step = 1
    },
  },
})

export const { addGuess, deleteGuess, clearGuess, nextStep, clearStep } = colorSlice.actions

export default colorSlice.reducer