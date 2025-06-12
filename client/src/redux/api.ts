import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GetKpisResponse } from "./Types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products"],
  endpoints: (builder) => ({
    getKpis: builder.query<Array<GetKpisResponse>, void>({
      query: () => "/api/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: builder.query<void, void>({
      query: () => "/api/products",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery } = api;
