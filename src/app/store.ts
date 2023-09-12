import { configureStore } from "@reduxjs/toolkit";
import { applicationSlice } from '../features/applicationSlise';
import { oneCarPageSlice } from '../features/oneCarPageSlice'



export const store = configureStore({
    reducer: {
        application: applicationSlice.reducer,
        oneCarPage: oneCarPageSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch