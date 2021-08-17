import action from "./action";
import * as contactsAPI from "services/contactsAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

// export const addContact = createAsyncThunk('addContact', async (contact) => {
//   // const result = await contactsAPI.createContact(contact)
//   const result = await axios.post(
//     'https://611570c58f38520017a384f9.mockapi.io/contacts/contactsList',
//     contact,
//   )

//   return result.data
// })

export const addContact = createAsyncThunk(
  "addContact",
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const newContact = { name, number };
      const { data } = await contactsAPI.createContact(newContact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const deleteContact = createAsyncThunk('deleteContact', async (id) => {
//   await axios.delete(
//     `https://611570c58f38520017a384f9.mockapi.io/contacts/contactsList/${id}`,
//   )

//   return id
// })

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await contactsAPI.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
