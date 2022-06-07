import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'



export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.edamam.com/'
  }),
  endpoints: (builder) => ({
    getRecipe: builder.mutation({
      query: ({
        query,
        health
      }) => {
        return {
          url: `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=d4849719&app_key=873b8b43fcfd3a35c09e90cb1fec8f77&health=${health}`,
          method: 'GET'
        }
      }
    })
  })
})

export const {
  useGetRecipeMutation
} = recipeApi