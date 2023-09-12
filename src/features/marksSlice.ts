import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface MarksCar {
    _id: string,
    name: string
}

type RegistrState = {
    marks: MarksCar[]
    error: null | unknown | string
    loading: boolean
}

const initialState: RegistrState = {
    marks: [],
    error: null,
    loading: false
}

export const fetchMarks = createAsyncThunk(
    "fetch/marks",
    async (_, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:4444/marks");
            const marks = await res.json();

            return marks;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const marksSlice = createSlice({
    name: 'marks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMarks.fulfilled, (state, action) => {
                state.marks = action.payload;
                state.error = null;
                state.loading = false
            })
            .addCase(fetchMarks.rejected, (state, action) => {
                state.error = action.payload.message;
                state.loading = false
            })
            .addCase(fetchMarks.pending, (state) => {
                state.loading = true
            })
    },
})

export default marksSlice.reducer
