import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";
const apiBaseUrl = 'https://normal-pepita-isaac-kiptoo-kilimo-f515ef7f.koyeb.app/api';

export const auditApi = createApi({
  reducerPath: "auditApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseUrl}`}),
  tagTypes: ["Audit"],
  endpoints: (builder) => ({
    getAuditLogs: builder.query({
      query: () => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const token = JSON.parse(localStorage.getItem("token"));
        const isAdmin = user.role === "admin" 
        return {
          url: "/audit-logs",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            isAdmin,
          },
        };
      },
      providesTags: ["Audit"],
    }),
  }),
});

const initialState = {
  page: 1,
};

export const auditSlice = createSlice({
  name: "audit",
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
export const { setPage, setPrevPage, setNextPage } = auditSlice.actions;
export const { useGetAuditLogsQuery } = auditApi;