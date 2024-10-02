import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request for all products with limit
    getProducts: build.query({
      query: (params) => ({
        url: "/product/list",
        params,
        headers: { "Content-Type": "application/json" },
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    // Get request for a single product by ID
    getSingleProduct: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),

    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/product/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

    updateProduct:build.mutation({
      query:({body,id}) => ({ 
        url:`/product/update/${id}`,
        method:"PUT",
        body
      }),
      invalidatesTags: ["Product"]
    })
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation
} = productApi;
