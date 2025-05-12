import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = import.meta.env.VITE_API_URL || '/api';

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseUrl}` }),
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => {
        let params = {};
        return {
          url: "/categories",
          method: "GET",
          params
        };
      },
      providesTags: ["Categories"],
    }),
    createCategory: builder.mutation({
      query: (newCategory) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isManagement = user.role === "admin" || user.role === "staff";
        return {
          url: "/categories",
          method: "POST",
          body: newCategory,
          headers: {
            Authorization: `Bearer ${token}`,
            isAdminOrStaff: isManagement,
          },
        };
      },

      invalidatesTags: ["Categories"],
    }),
    updateCategory: builder.mutation({
      query: (payload) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isManagement = user.role === "admin" || user.role === "staff";
        const { _id: categoryId, name, description } = payload;
        return {
          url: `/categories/update/${categoryId}`,
          method: "PUT",
          body: { name, description },
          headers: {
            Authorization: `Bearer ${token}`,
            isAdminOrStaff: isManagement,
          },
        };
      },

      invalidatesTags: ["Categories"],
    }),
    getCategoryDetails: builder.query({
        query: (categoryId) => {
          const user = JSON.parse(localStorage.getItem("loggedInUser"));
          const token = JSON.parse(localStorage.getItem("token"));
          const isManagement = user.role === "admin" || user.role === "staff";
  
          return {
            url: `/categories/${categoryId}`,
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              isAdminOrStaff: isManagement,
            },
          };
        },
        providesTags: ["Categories"],
      }),
    removeCategory: builder.mutation({
      query: (categoryId) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isManagement = user.role === "admin" || user.role === "staff";
        return {
          url: `/categories/delete/${categoryId}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdminOrStaff: isManagement,
          },
        };
      },

      invalidatesTags: ["Categories"],
    }),
  }),
});
const initialState = {
  page: 1,
};

export const categoriesSlice = createSlice({
  name: "categoryPages",
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
export const { setPage, setPrevPage, setNextPage } = categoriesSlice.actions;

export const {
    useCreateCategoryMutation,
    useGetAllCategoriesQuery,
    useGetCategoryDetailsQuery,
    useUpdateCategoryMutation,
    useRemoveCategoryMutation
} = categoryApi;
