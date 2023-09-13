import { configureStore } from "@reduxjs/toolkit";
import { applicationSlice } from '../features/applicationSlise';
import { oneCarPageSlice } from '../features/oneCarPageSlice'
import modelsSlice from "../features/modelsSlice";
import marksSlice from "../features/marksSlice";
import userSlice from "../features/userSlice";



export const store = configureStore({
    reducer: {
        application: applicationSlice.reducer,
        oneCarPage: oneCarPageSlice.reducer,
        Cars: modelsSlice,
        marks: marksSlice,
        user: userSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch