import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  GetKpisResponse,
  getProductResponse,
  getTransactionResponse,
} from "./Types";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://finance-dashboard-backend-fy04.onrender.com",
  }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (builder) => ({
    getKpis: builder.query<Array<GetKpisResponse>, void>({
      query: () => "/api/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: builder.query<getProductResponse, void>({
      query: () => "/api/products",
      providesTags: ["Products"],
    }),
    getTransactions: builder.query<getTransactionResponse, void>({
      query: () => "/api/transactions",
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
