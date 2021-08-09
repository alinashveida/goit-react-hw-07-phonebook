//import { combineReducers } from 'redux'
//import types from './types'

import { createReducer, combineReducers } from "@reduxjs/toolkit";
import action from "./action";

//--------------------------------redux-toolkit

const items = createReducer([], {
  [action.addContact]: (state, action) => [action.payload, ...state],
  [action.deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [action.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

//-------------------------------------redux

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [payload, ...state]

//     case types.DELETE:
//       return state.filter((contact) => contact.id !== payload)

//     default:
//       return state
//   }
// }

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload

//     default:
//       return state
//   }
// }

// export default combineReducers({
//   items,
//   filter,
// })
