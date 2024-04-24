import { configureStore } from '@reduxjs/toolkit';

import { createSlice } from "@reduxjs/toolkit";
import { api } from '../api';





export const firstSlice=createSlice(
    {
        name:'myFirstSlice',
        initialState:{
            user:{},
            props:{login:false}
        },
        reducers:{
            setUser:(currentState,action)=>{{
               const user= {...currentState.user,firstname:action.payload}
               return {...currentState,user:user}
            }},
            login: (currentState,action)=>{
              {
                const props={...currentState.props,login:action.payload}
                return {...currentState,props:props}
              }
            }
        }

    }
)
export const getUser = (state) => state && state.myFirstSlice.user.firstname;
export const getLogin=(state)=>state && state.myFirstSlice.props.login

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