import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = import.meta.env.VITE_API_URL || '/api';

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseUrl}` }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (params) => {        
        return {
          url: `/products`,
          method: "GET",
          params
        };
      },
      providesTags: ["Products"],
    }),

    createProduct: builder.mutation({
      query: (newProduct) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isManagement = user.role === "admin" || user.role === "staff";
        
        return {
          url: "/products",
          method: "POST",
          body: newProduct,
          headers: {
            Authorization: `Bearer ${token}`,
            isAdminOrStaff: isManagement,
          },
        };
      },
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: (productPayload) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isManagement = user.role === "admin" || user.role === "staff";
        const { _id: productId, updatedProduct } = productPayload;
        return {
          url: `/products/update/${productId}`,
          method: "PUT",
          body: updatedProduct,
          headers: {
            Authorization: `Bearer ${token}`,
            isAdminOrStaff: isManagement,
          },
        };
      },
      invalidatesTags: ["Products"],
    }),

    updateOutOfStockProduct: builder.mutation({
      query: (productId) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isManagement = user.role === "admin" || user.role === "staff";
        return {
          url: `/products/check-stock/${productId}`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdminOrStaff: isManagement,
          },
        };
      },
      invalidatesTags: ["Products"],
    }),

    updateInStockProduct: builder.mutation({
      query: (productId) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isManagement = user.role === "admin" || user.role === "staff";
        return {
          url: `/products/update-stock/${productId}`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdminOrStaff: isManagement,
          },
        };
      },
      invalidatesTags: ["Products"],
    }),

    applyProductOffer: builder.mutation({
      query: ({ _id, offerPrice }) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isManagement = user.role === "admin" || user.role === "staff";
        
        return {
          url: `/products/apply-offer/${_id}`,
          method: "PATCH",
          body: { offerPrice },
          headers: {
            Authorization: `Bearer ${token}`,
            isAdminOrStaff: isManagement,
          },
        };
      },
      invalidatesTags: ["Products"],
    }),    

    getProductDetails: builder.query({
      query: (productId) => {
        return {
          url: `/products/${productId}`,
          method: "GET",
        };
      },
      providesTags: ["Products"],
    }),

    RemoveProduct: builder.mutation({
      query: (productId) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isAdmin = user.role === "admin";
        return {
          url: `/products/delete/${productId}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      invalidatesTags: ["Products"],
    }),
  }),
});


const initialState = {
  page: 1,
  name: "",
};

export const productSlice = createSlice({
  name: "productPages",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setPrevPage: (state) => {
      const newPage = state.page - 1;
      if (newPage < 1) return;
      state.page = newPage;
    },
    setNextPage: (state, { payload: pageCount }) => {
      const newPage = state.page + 1;
      if (newPage > pageCount) return;
      state.page = newPage;
    },
    setSearchName: (state, { payload }) => {
      state.name = payload;
      state.page = 1;
    },
  },
});

export const { setPage, setPrevPage, setNextPage, setSearchName } = productSlice.actions;

export default productSlice.reducer;


export const {
  useGetAllProductsQuery,
  useCreateProductMutation,
  useGetProductDetailsQuery,
  useUpdateProductMutation,
  useRemoveProductMutation,
  useUpdateOutOfStockProductMutation,
  useUpdateInStockProductMutation,
  useApplyProductOfferMutation
} = productApi;
