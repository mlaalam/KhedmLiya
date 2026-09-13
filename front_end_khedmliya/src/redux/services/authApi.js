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
        invalidatesTags: ['User']
      }),
  }),
})



export const { useLoginMutation } = authApi;


