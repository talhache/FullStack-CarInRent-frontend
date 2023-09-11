import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Car = {
  _id: string | number;
  img: string;
  name: string;
  description: string;
  capacity: number;
  mark: string;
};

type CarState = {
  car: Car[];
};

const initialState: CarState = {
  car: [],
};


export const getCarById = createAsyncThunk("carId/fetch", async (_id, thunkAPI) =>{
    try {
        const res = await fetch(`http://localhost:4444/cars${_id}`);
        return res.json();
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    });


export const oneCarPage = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getCarById.fulfilled,(state, action) => {
        state.car = action.payload
    })
  },
});
