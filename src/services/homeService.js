import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../db/database";

export const homeApi = createApi({
    reducerPath: "homeApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products.json'
        })
    })
})

export const { useGetProductsQuery } = homeApi