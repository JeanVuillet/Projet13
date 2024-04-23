import { configureStore } from '@reduxjs/toolkit';

import { createSlice } from "@reduxjs/toolkit";
import { api } from '../api';





export const firstSlice=createSlice(
    {
        name:'myFirstSlice',
        initialState:{
            user:{},
            props:{}
        },
        reducers:{
            setUser:(currentState,action)=>{{
               const user= {...currentState.user,firstname:action.payload}
               return {...currentState,user:user}
            }

            }
        }

    }
)
export const getUser = (state) => state && state.myFirstSlice.user.firstname;

const store = configureStore({
  reducer:{
    myFirstSlice:firstSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Ajoutez le middleware de votre API
});
  // Ajoutez ici d'autres options de configuration du store si nécessaire


export {store};