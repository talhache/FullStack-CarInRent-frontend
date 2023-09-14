import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface Car {
    _id: string,
    name: string
}

type RegistrState = {
    areCarsSelected: boolean;
    selectedCars: {
        car1: [],
        car2: [],
    }
}

const initialState: RegistrState = {
    areCarsSelected: false,
    selectedCars: {
        car1: [],
        car2: [],
    }
}

export const getCarById = createAsyncThunk(
    "carId/fetch",
    async (_id, thunkAPI) => {
      try {
        const res = await fetch(`http://localhost:4444/cars/${_id}`);
        return res.json();
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    }
  );

  export const compareCarsSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCarById.fulfilled, (state, action) => {
            state.selectedCars.car1 = action.payload;
          })
    },
})

export default compareCarsSlice.reducer
