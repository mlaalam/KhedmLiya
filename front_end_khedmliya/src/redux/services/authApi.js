import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api";


export const authApi = createApi({
  reducerPath:'authApi',
  baseQuery: baseQuery,
  tagTypes:['User'],


  endpoints:(builder) => ({
      login: builder.mutation({
        query: (credentials) => ({
          url: 'login',
          method: 'POST',
          body: credentials,
        }),
      }),
      register: builder.mutation({
      query: (credentials) =>({
          url: 'register',
          method:'POST',
          body:credentials
      }),
    }),
  }),

  
})



export const { useLoginMutation , useRegisterMutation } = authApi;


