import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiBaseUrl = import.meta.env.VITE_API_URL || '/api';

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseUrl}` }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ page } = {}) => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const token = JSON.parse(localStorage.getItem("token"));
        const isAdmin = user.role==="admin";
        let params = {page};
        
        return {
          url: `/users`,
          method: "GET",
          params,
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      providesTags: ["users"],
    }),

    createUser: builder.mutation({
      query: (newUser) => {
        return {
          url: "/user",
          method: "POST",
          body: newUser
        };
      },
      invalidatesTags: ["users"],
    }),

    getAllStaff: builder.query({
        query: ({ page } = {}) => {
          const user = JSON.parse(localStorage.getItem("loggedInUser"));
          const token = JSON.parse(localStorage.getItem("token"));
          const isAdmin = user.role==="admin";
          let params = {page};
          return {
            url: `/staff`,
            method: "GET",
            params,
            headers: {
              Authorization: `Bearer ${token}`,
              isAdmin: isAdmin,
            },
          };
        },
        providesTags: ["users"],
      }),
    
      getAllInactiveStaff: builder.query({
        query: () => {
          const user = JSON.parse(localStorage.getItem("loggedInUser"));
          const token = JSON.parse(localStorage.getItem("token"));
          const isAdmin = user.role==="admin";
          let params = {};
          return {
            url: `/staff/inactive`,
            method: "GET",
            params,
            headers: {
              Authorization: `Bearer ${token}`,
              isAdmin: isAdmin,
            },
          };
        },
        providesTags: ["users"],
      }),
  
    createStaff: builder.mutation({
        query: (newStaff) => {
          const token = JSON.parse(localStorage.getItem("token"));
          const user = JSON.parse(localStorage.getItem("loggedInUser"));
          const isAdmin = user.role === "admin";
          return {
            url: "/staff",
            method: "POST",
            body: newStaff,
            headers: {
              Authorization: `Bearer ${token}`,
              isAdmin: isAdmin,
            },
          };
        },
        invalidatesTags: ["users"],
      }),

    authenticateUser: builder.mutation({
      query: (loginUser) => ({
        url: "/auth/login",
        method: "POST",
        body: loginUser,
      }),
      invalidatesTags: ["users"],
    }),
    changePassword: builder.mutation({
      query: (changePass) => {
        const token = JSON.parse(localStorage.getItem("token"));

        if (!token) {
          throw new Error("Token not found in local storage");
        } else {
          return {
            url: "/auth/change/password",
            method: "POST",
            body: changePass,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
        }
      },
      invalidatesTags: ["users"],
    }),

    forgotPassword: builder.mutation({
      query: (forgotPass) => ({
        url: "/auth/forgot/password",
        method: "POST",
        body: forgotPass,
      }),
      invalidatesTags: ["users"],
    }),
    resetPassword: builder.mutation({
      query: (resetPass) => ({
        url: "/auth/reset/password",
        method: "POST",
        body: resetPass,
      }),
      invalidatesTags: ["users"],
    }),
    refreshExpiredToken: builder.mutation({
      query: (reshedToken) => {
        return {
          url: "/auth/refreshToken",
          method: "POST",
          body: reshedToken,
        };
      },
      invalidatesTags: ["users"],
    }),
    updateUserProfile: builder.mutation({
      query: (userPayload) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const { _id: userId, updatedUser } = userPayload;
        return {
          url: `/user/update/${userId}`,
          method: "PATCH",
          body: updatedUser,
          headers: {
            Authorization: `Bearer ${token}`
          },
        };
      },
      invalidatesTags: ["users"],
    }),
    updateStaffProfile: builder.mutation({
      query: (staffPayload) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isManage = user.role === "admin" || user.role === "admin";
        const { _id: staffId, updatedStaff } = staffPayload;
        return {
          url: `/staff/update/${staffId}`,
          method: "PATCH",
          body: updatedStaff,
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isManage,
          },
        };
      },
      invalidatesTags: ["users"],
    }),
    getUserDetails: builder.query({
      query: (userId) => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const token = JSON.parse(localStorage.getItem("token"));
        const isAdmin = user.role === "admin";

        return {
          url: `/user/${userId}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      providesTags: ["users"],
    }),
    getStaffDetails: builder.query({
      query: (staffId) => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const token = JSON.parse(localStorage.getItem("token"));
        const isAdmin = user.role === "admin";

        return {
          url: `/staff/${staffId}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      providesTags: ["users"],
    }),
    RemoveUser: builder.mutation({
      query: (userId) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isAdmin = user.role === "admin";
        return {
          url: `/user/delete/${userId}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      invalidatesTags: ["users"],
    }),
    removeStaff: builder.mutation({
      query: (staffId) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isAdmin = user.role === "admin";
        return {
          url: `/staff/delete/${staffId}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      invalidatesTags: ["users"],
    }),
    deactivateUser: builder.mutation({
      query: (userId) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isAdmin = user.role === "admin";
        return {
          url: `/user/softDelete/${userId}`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      invalidatesTags: ["users"],
    }),
    deactivateStaff: builder.mutation({
      query: (staffId) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isAdmin = user.role === "admin";
        return {
          url: `/staff/softDelete/${staffId}`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      invalidatesTags: ["users"],
    }),
    restoreUser: builder.mutation({
      query: (userId) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isAdmin = user.role === "admin";
        return {
          url: `/user/restore/${userId}`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      invalidatesTags: ["users"],
    }),
    restoreStaff: builder.mutation({
      query: (staffId) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isAdmin = user.role === "admin";
        return {
          url: `/staff/restore/${staffId}`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

const initialState = {
  page: 1,
  name: "",
  roleId: "",
};

export const userSlice = createSlice({
  name: "userPages",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setPrevPage: (state) => {
      const newPage = state.page - 1;
      if (newPage < 1) {
        return;
      }
      state.page = newPage;
    },
    setNextPage: (state, { payload: pageCount }) => {
      const newPage = state.page + 1;
      if (newPage > pageCount) {
        return;
      }
      state.page = newPage;
    },
  },
});
export const { setPage, setPrevPage, setNextPage, setAvailability } =
  userSlice.actions;

export const {
  useGetAllUsersQuery,
  useCreateUserMutation,
  useGetAllStaffQuery,
  useCreateStaffMutation,
  useAuthenticateUserMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useRefreshExpiredTokenMutation,
  useUpdateStaffProfileMutation,
  useUpdateUserProfileMutation,
  useGetStaffDetailsQuery,
  useGetUserDetailsQuery,
  useRemoveUserMutation,
  useRemoveStaffMutation,
  useDeactivateStaffMutation,
  useDeactivateUserMutation,
  useRestoreStaffMutation,
  useRestoreUserMutation
} = userApi;
