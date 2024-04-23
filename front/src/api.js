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
        })
    })
});

// Exportez la fonction de mutation directement pour pouvoir l'utiliser dans d'autres fichiers
export const { useLoginMutation } = api;