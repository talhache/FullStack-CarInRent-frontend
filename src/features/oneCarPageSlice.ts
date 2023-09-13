import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type Car = {
  _id: string | number;
  img: string;
  name: string;
  description: string;
  capacity: number;
  mark: string;
  price: string;
};
type Reviews = {
  _id: string;
  cars: string;
  text: string;
  rating: number;
  carId: string | number
  userId: string
};

type CarState = {
  car: Car[];
  reviews: Reviews[];
};

const initialState: CarState = {
  car: [],
  reviews: [],
};

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

export const patchReviews = createAsyncThunk<void, Reviews, {rejectValue: unknown; state: RootState}>(
  "car/addReviews",
  async ({ text, rating, carId}, thunkAPI) => {
    try {
      const res = await fetch(
        `http://localhost:4444/news/${carId}/add/comment`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          },
          body: JSON.stringify({
            text: text,
            rating: rating,
          }),
        }
      );
      res.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addReviews = createAsyncThunk<void, Reviews, {rejectValue: unknown; state: RootState}>(
  "car/addReviews",
  async ({ text, rating, carId, userId}, thunkAPI) => {
    try {
      const res = await fetch(
        `http://localhost:4444/news/${carId}/add/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          },
          body: JSON.stringify({
            text: text,
            rating: rating,
            userId: userId
          }),
        }
      );
      res.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const oneCarPageSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarById.fulfilled, (state, action) => {
      state.car = action.payload;
    })
    .addCase(patchReviews.fulfilled, (state, action) => {
      state.reviews.push(action.payload)
      console.log(state);
      
     })
  //   .addCase(addReviews.fulfilled, (state, action) => {
  //     state.reviews = action.payload
  //     console.log(state);
      
  // })
  },
});



export default oneCarPageSlice.reducer;
