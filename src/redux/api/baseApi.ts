// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001/api' }),
  tagTypes: ['task'],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `/tasks`,
      providesTags: ['task']
    }),
    createTask: builder.mutation({
      query: (taskData) => ({
        url: "/tasks",
        method: "POST",
        body: taskData
      }),
      invalidatesTags: ['task']
    })
  }),
})

export const { useGetTasksQuery, useCreateTaskMutation } = baseApi;