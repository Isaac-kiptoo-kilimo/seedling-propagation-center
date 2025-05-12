import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = import.meta.env.VITE_API_URL || '/api';

export const healthCheckApi = createApi({
  reducerPath: "healthCheckApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseUrl}`}),
  tagTypes: ["healthCheck"],
  endpoints: (builder) => ({
    getHealthCheck: builder.query({
      query: () => {
        return {
          url: "/health",
          method: "GET"
        };
      },
      providesTags: ["healthCheck"],
    }),
 
  }),
});

export const {
  useGetHealthCheckQuery
} = healthCheckApi;
