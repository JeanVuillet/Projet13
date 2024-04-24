// Dans votre fichier api.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/api/v1'}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (user) => ({
                url: '/user/login',
                method: 'POST',
                body: user
            })
        }),
        getUser: builder.mutation({
            query: (token) => ({
                url: '/user/profile',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}` // Remplacez "yourTokenHere" par votre token JWT
                }
            })
        })
    })
});


export const { useLoginMutation, useGetUserMutation} = api;

