import action from "./action";
import * as contactsAPI from "services/contactsAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchContactsList = () => async (dispatch) => {
//   dispatch(action.fetchContactsRequest())

//   try {
//     const contacts = await contactsAPI.fetchContacts()
//     dispatch(action.fetchContactsSuccess(contacts))
//   } catch (error) {
//     dispatch(action.fetchContactsError(error))
//   }
// }

export const fetchContactsList = createAsyncThunk(
  "fethContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
