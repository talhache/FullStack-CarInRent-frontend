export interface MarksCar {
    _id: string,
    name: string
}

type RegistrState = {
    category: CategoryNews[]
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
            const res = await fetch("http://localhost:5000/category");
            const categories = await res.json();

            return categories;
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
            .addCase(authSignUp.pending, (state) => {
                state.signingUp = true;
                state.error = null;
                state.loading = true
            })
            .addCase(authSignUp.rejected, (state, action) => {
                state.signingUp = false;
                state.error = action.payload;
                state.loading = false
            })
            .addCase(authSignUp.fulfilled, (state) => {
                state.signingUp = false;
                state.error = null;
                state.loading = false
            })
            .addCase(authSignIn.pending, (state) => {
                state.signingIn = true;
                state.error = null;
                state.loading = true
            })
            .addCase(authSignIn.rejected, (state, action) => {
                state.signingIn = false;
                state.error = action.payload;
                state.loading = false
            })
            .addCase(authSignIn.fulfilled, (state, action) => {
                state.signingIn = false;
                state.error = null;
                state.token = action.payload.token;
                state.loading = false
            });
    },
})

export default applicationSlice.reducer
