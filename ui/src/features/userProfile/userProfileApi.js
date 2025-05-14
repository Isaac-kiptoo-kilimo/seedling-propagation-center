import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken, getItemFromLocalStorage } from "../../utils";
import { createSlice } from "@reduxjs/toolkit";

const apiBaseUrl = 'https://normal-pepita-isaac-kiptoo-kilimo-f515ef7f.koyeb.app/api';

export const userProfileApi = createApi({
  reducerPath: "userProfileApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseUrl}`}),
  tagTypes: ["userProfile"],
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => {
        const { isAdmin, token } = getAuthToken();
        return {
          url: "/users/profile",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin,
          },
        };
      },
      providesTags: ["userProfile"],
    }),
    updateAdminUserProfile: builder.mutation({
      query: (updatedProfile) => {
        const { isAdmin, token } = getAuthToken();
        return {
          url: "/admin/profile",
          method: "PATCH",
          body: updatedProfile,
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin,
          },
        };
      },
      invalidatesTags: ["userProfile"],
    }),
    updateAdminProfilePicture: builder.mutation({
      query: (updatedPicture) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isAdmin = user.isAdmin;
        return {
          url: "/users/profile-picture",
          method: "PATCH",
          body: updatedPicture,
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      invalidatesTags: ["userProfile"],
    }),
    removeAdminProfilePicture: builder.mutation({
      query: () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isAdmin = user.isAdmin;
        return {
          url: "/users/profile-picture",
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      invalidatesTags: ["userProfile"],
    }),
  }),
});

const initialState = {
  authenticatedUser: getItemFromLocalStorage("loggedInUser") || null,
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setAuthenticatedUser: (state, { payload }) => {
      state.authenticatedUser = payload;
    },
     logoutUser: (state) => {
      state.authenticatedUser = null;
    },
  },
});

export const { setAuthenticatedUser,logoutUser } = userProfileSlice.actions;

export const {
  useGetUserProfileQuery,
  useUpdateAdminUserProfileMutation,
  useUpdateAdminProfilePictureMutation,
  useRemoveAdminProfilePictureMutation
} = userProfileApi;
