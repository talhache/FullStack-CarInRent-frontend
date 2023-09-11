import { configureStore } from "@reduxjs/toolkit";
import { applicationSlice } from './../features/applicationSlise';


export const store = configureStore({
    reducer: {
        news: newsSlice.reducer,
        application: applicationSlice.reducer,
        category: categorySlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch