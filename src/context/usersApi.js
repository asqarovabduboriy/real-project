import { api } from './api'

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (params) => ({ 
        url: `/users`, 
        method: "GET",
        params
      }),
      providesTags:["User"]
    }),
    postSignIn: build.mutation({
        query: (body)=>({
            url: "/auth/login",
            method:"POST",
            body
        }),
        invalidatesTags: ["User"]
    })
  }),
})

export const {
    useGetUsersQuery,
    usePostSignInMutation
} = userApi


