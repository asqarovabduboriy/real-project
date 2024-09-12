import { api } from "./index";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Post request
    userIsLogin: build.mutation({
      query: (body) => ({
        url: "user/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    userregiter: build.mutation({
      query: (body) => ({
        url: "user/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useUserIsLoginMutation, useUserregiterMutation  } = userApi;
