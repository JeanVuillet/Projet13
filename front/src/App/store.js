import { configureStore } from '@reduxjs/toolkit';

import { createSlice } from "@reduxjs/toolkit";






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
  }
  // Ajoutez ici d'autres options de configuration du store si nécessaire
});

export {store};