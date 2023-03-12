import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
reducerPath:"api",
baseQuery: fetchBaseQuery({
    baseUrl:'https://my-json-server.typicode.com/AlvaroArratia/static-todos-api'
}),endpoints:(builder)=>({
    getTodo:builder.query({
        query:()=>'/todos'
    })
})
})
export const {useGetTodoQuery} = apiSlice