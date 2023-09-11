import { configureStore } from "@reduxjs/toolkit";
import { applicationSlice } from '../features/applicationSlise';


export const store = configureStore({
    reducer: {
        application: applicationSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch