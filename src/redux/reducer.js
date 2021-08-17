//import { combineReducers } from 'redux'
//import types from './types'

import { createReducer, combineReducers } from "@reduxjs/toolkit";
import action from "./action";
import { fetchContactsList, addContact, deleteContact } from "redux/operation";
import { createSlice } from "@reduxjs/toolkit";

//--------------------------------redux-toolkit

// const items = createReducer([], {
//   [action.addContact]: (state, action) => [action.payload, ...state],
//   [action.deleteContact]: (state, action) =>
//     state.filter((contact) => contact.id !== action.payload),
// });

// const items = createReducer([], {
//   [action.fetchContactsSuccess]: (_, action) => action.payload,
//   [action.addContact]: (state, action) => [action.payload, ...state],
//   [action.deleteContact]: (state, action) =>
//     state.filter((contact) => contact.id !== action.payload),
// })

const items = createReducer([], {
  [fetchContactsList.fulfilled]: (_, action) => action.payload,
  //[action.addContact]: (state, action) => [action.payload, ...state],
  //[action.deleteContact]: (state, action) =>
  //  state.filter((contact) => contact.id !== action.payload),

  [addContact.fulfilled]: (state, action) => [action.payload, ...state],
  [deleteContact.fulfilled]: (state, action) => {
    state = state.filter((contact) => contact.id !== action.payload);
  },
});

const filter = createReducer("", {
  [action.changeFilter]: (state, { payload }) => payload,
});

// const isLoading = createReducer(false, {
//   [action.fetchContactsRequest]: () => true,
//   [action.fetchContactsSuccess]: () => false,
//   [action.fetchContactsError]: () => false,
// })

const isLoading = createReducer(false, {
  [fetchContactsList.pending]: () => true,
  [fetchContactsList.fulfilled]: () => false,
  [fetchContactsList.rejected]: () => false,
});

// const error = createReducer(null, {
//   [action.fetchContactsError]: (_, action) => action.payload,
//   [action.fetchContactsRequest]: () => null,
// })

const error = createReducer(null, {
  [fetchContactsList.rejected]: (_, action) => action.payload,
  [fetchContactsList.pending]: () => null,
});

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: { items: [], filter: "", isLoading: false, error: null },
//   extraReducers: {
//     [fetchContactsList.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         items: action.payload,
//       };
//     },
//     [action.addContact]: (state, action) => {
//       return {
//         ...state,
//         items: [action.payload, ...state],
//       };
//     },
//     [action.deleteContact]: (state, action) => {
//       return {
//         ...state,
//         items: items.filter((contact) => contact.id !== action.payload),
//       };
//     },

//     // [action.changeFilter]: (state, { payload }) => {
//     //   return{
//     //     ...state,
//     //     filter: payload
//     //   }
//   },
// });

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
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
