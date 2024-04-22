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
            addOne:(currentState,action)=>{{
               const user= {...currentState.user,firstname:'tony'}
               return {...currentState,user:user}
            }

            }
        }

    }
)
 const firstReducer=firstSlice.reducer;

const store = configureStore({
  firstReducer: firstReducer,
  // Ajoutez ici d'autres options de configuration du store si nécessaire
});

export {store};