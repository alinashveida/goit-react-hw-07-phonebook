import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

// export const getFilterContacts = (state) => {
//   const allContacts = getContacts(state)
//   const filter = getFilter(state)

//   const normalizedFilter = filter.toLowerCase()

//   return allContacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   )
// }

export const getFilterContacts = createSelector(
  [getContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
