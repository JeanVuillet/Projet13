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
            query: (token) => { 
        
                return({
                url: '/user/profile',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}` // Remplacez "yourTokenHere" par votre token JWT
                }
            })}
        }),
        changeName: builder.mutation({
            query: (object) => {
            
                return ({
                url: '/user/profile',
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${object.token}`
                },
                body: {
                    firstName: object.firstName,
                    lastName: object.lastName
                }
            })}
        })
    })
});


export const { useLoginMutation, useGetUserMutation, useChangeNameMutation} = api;

