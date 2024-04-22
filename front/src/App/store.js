import { configureStore } from '@reduxjs/toolkit';

import { createSlice } from "@reduxjs/toolkit";

export const firstSlice=createSlice(
    {
        name:'myFirstSlice',
        initialState:{},
        reducers:{
            addOne:(currentState,action)=>{
                currentState.newProp = 'coucou';
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