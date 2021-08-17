import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://611570c58f38520017a384f9.mockapi.io/contacts/",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => "/contactsList",
      providesTags: ["Contact"],
    }),
    deleteTodo: builder.mutation({
      query: (contactId) => ({
        url: `/contactsList/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
    createTodo: builder.mutation({
      query: (contactContent) => ({
        url: "/contactsList",
        method: "POST",
        body: {
          content: contactContent,
        },
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContatcMutation,
  useCreateContactMutation,
} = contactsApi;
