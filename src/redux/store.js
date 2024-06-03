// import { createStore } from 'redux';
// import reducer from './reducers/colorReducer';
// import { composeWithDevTools } from '@redux-devtools/extension';
// const store = createStore(reducer, composeWithDevTools());

// export default store;


import { configureStore } from '@reduxjs/toolkit'
// import colorReducer from './reducers/colorReducer'
import colorSlice from './reducers/colorSlice'

export const store = configureStore({
  reducer: {
    colorReducer: colorSlice
  },
})