import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { auditApi, categoryApi, healthCheckApi, orderApi, productApi, userApi, userProfileApi } from "../features";
import { configurationSlice } from "../features/configurations/configurationSlice";
import { cartSlice } from "../features/cart/CartSlice";
import { userProfileSlice } from "../features/userProfile/userProfileApi";
import { userSlice } from "../features/auth/userApi";
import { productSlice } from "../features/products/productApi";
import { orderSlice } from "../features/orders/orderApi";
import { categoriesSlice } from "../features/categories/categoryApi";
import { auditSlice } from "../features/auditLogs/AuditLogApi";

export const store = configureStore({
    reducer: {
      [healthCheckApi.reducerPath]: healthCheckApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      [userProfileApi.reducerPath]: userProfileApi.reducer,
      [productApi.reducerPath]: productApi.reducer,
      [orderApi.reducerPath]: orderApi.reducer,
      [categoryApi.reducerPath]: categoryApi.reducer,
      [auditApi.reducerPath]: auditApi.reducer,
      [configurationSlice.name]: configurationSlice.reducer,
      [cartSlice.name]: cartSlice.reducer,
      [userProfileSlice.name]: userProfileSlice.reducer,
      [userSlice.name]: userSlice.reducer,
      [productSlice.name]: productSlice.reducer,
      [orderSlice.name]: orderSlice.reducer,
      [categoriesSlice.name]: categoriesSlice.reducer,
      [auditSlice.name]: auditSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        healthCheckApi.middleware,
        userApi.middleware,
        userProfileApi.middleware,
        productApi.middleware,
        orderApi.middleware,
        categoryApi.middleware,
        auditApi.middleware
      ),
  });

setupListeners(store.dispatch);


