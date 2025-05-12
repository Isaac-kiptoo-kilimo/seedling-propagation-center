import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiBaseUrl = import.meta.env.VITE_API_URL || '/api';

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseUrl}` }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: ({page,searchQuery}) => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const token = JSON.parse(localStorage.getItem("token"));
        const isAdmin = user.role === "admin";
        const params = { page, ...searchQuery };
        return {
          url: `/orders`,
          method: "GET",
          params,
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      providesTags: ["Orders"],
    }),

    createOrder: builder.mutation({
      query: (newUser) => {
        return {
          url: "/orders",
          method: "POST",
          body: newUser,
        };
      },
      invalidatesTags: ["Orders"],
    }),
    updateOrder: builder.mutation({
      query: (orderPayload) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isAdmin = user.role === "admin";
        const { _id: orderId, updatedOrder } = orderPayload;
        return {
          url: `/orders/update/${orderId}`,
          method: "PUT",
          body: updatedOrder,
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      invalidatesTags: ["Orders"],
    }),

    completePayment: builder.mutation({
      query: ({orderId,paymentData}) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isAdmin = user.role === "admin";
        return {
          url: `/orders/complete-payment/${orderId}`,
          method: "PATCH",
          body: paymentData, 
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      invalidatesTags: ["Orders"],
    }),

    OrderInTransit: builder.mutation({
      query: (orderId) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isManage = user.role === "admin" || user.role === "staff";
        return {
          url: `/orders/inTransit/${orderId}`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isManage,
          },
        };
      },
      invalidatesTags: ["Orders"],
    }),

    completeOrder: builder.mutation({
      query: (orderId) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isAdmin = user.role === "admin";
        return {
          url: `/orders/complete-order/${orderId}`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      invalidatesTags: ["Orders"],
    }),

    cancelOrder: builder.mutation({
        query: (orderId) => {
          const token = JSON.parse(localStorage.getItem("token"));
          const user = JSON.parse(localStorage.getItem("loggedInUser"));
          const isAdmin = user.role === "admin";
          return {
            url: `/orders/cancel/${orderId}`,
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
              isAdmin: isAdmin,
            },
          };
        },
        invalidatesTags: ["Orders"],
      }),

    trackOrders: builder.query({
      query: (purchaseNumber) => {
        let params = purchaseNumber;
        return {
          url: `/orders/track/new-order`,
          method: "GET",
          params
        };
      },
      providesTags: ["Orders"],
    }),

    orderDeliveryConfirmation: builder.mutation({
      query: (updateDetail) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isManage = user.role === "admin" || user.role === "staff";
        return {
          url: `/orders/confirm-delivery`,
          method: "PATCH",
          body: updateDetail,
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isManage,
          },
        };
      },
      invalidatesTags: ["Orders"],
    }),

    getOrderDetails: builder.query({
      query: (orderId) => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const token = JSON.parse(localStorage.getItem("token"));
        const isAdmin = user.role === "admin";

        return {
          url: `/orders/${orderId}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      providesTags: ["Orders"],
    }),
    
    getUserOrders: builder.query({
        query: ({page}) => {
          const user = JSON.parse(localStorage.getItem("loggedInUser"));
          const token = JSON.parse(localStorage.getItem("token"));
          const isAdmin = user.role === "admin";
          const params = { page};

          return {
            url: '/orders/user',
            method: "GET",
            params,
            headers: {
              Authorization: `Bearer ${token}`,
              isAdmin: isAdmin,
            },
          };
        },
        providesTags: ["Orders"],
      }),

    getOrderForUser: builder.query({
    query: (userId) => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const token = JSON.parse(localStorage.getItem("token"));
        const isAdmin = user.role === "admin";

        return {
        url: `/orders/user/${userId}`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
        },
        };
    },
    providesTags: ["Orders"],
    }),

    getAllSalesSummary: builder.query({
      query: () => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const token = JSON.parse(localStorage.getItem("token"));
        const isAdmin = user.role === "admin";
        let params = {};
        return {
          url: `/sales-summary`,
          method: "GET",
          params,
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      providesTags: ["Orders"],
    }),

    RemoveOrder: builder.mutation({
      query: (orderId) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const isAdmin = user.role === "admin";
        return {
          url: `/orders/delete/${orderId}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin: isAdmin,
          },
        };
      },
      invalidatesTags: ["Orders"],
    }),
  }),
});

const initialState = {
  page: 1,
  name: "",
  roleId: "",
};

export const orderSlice = createSlice({
  name: "orderPages",
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
export const { setPage, setPrevPage, setNextPage } =
orderSlice.actions;

export const {
    useCreateOrderMutation,
    useGetAllOrdersQuery,
    useGetOrderDetailsQuery,
    useGetUserOrdersQuery,
    useGetOrderForUserQuery,
    useCompletePaymentMutation,
    useCompleteOrderMutation,
    useCancelOrderMutation,
    useOrderInTransitMutation,
    useTrackOrdersQuery,
    useOrderDeliveryConfirmationMutation,
    useUpdateOrderMutation,
    useGetAllSalesSummaryQuery,
    useRemoveOrderMutation
} = orderApi;
