import { configureStore } from "@reduxjs/toolkit";
import { applicationSlice } from '../features/applicationSlise';
import modelsSlice from "../features/modelsSlice";
import marksSlice from "../features/marksSlice";



export const store = configureStore({
    reducer: {
        application: applicationSlice.reducer,
        Cars: modelsSlice,
        marks: marksSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch