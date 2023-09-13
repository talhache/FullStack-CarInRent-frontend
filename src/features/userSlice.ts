import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type User = {
  _id: string;
  login: string;
  password: string;
  email: string;
};

type userInfoState = {
  users: User[];
  error: null | unknown | string;
  token: string | null | number;
  loading: boolean
};

const userState: userInfoState = {
  users: [],
  error: null,
  loading: false,
  token: localStorage.getItem("token"),
};

export const oneUser = createAsyncThunk('user/fetchUser', async (id, thunkAPI) => {
  console.log(id)
  const res = await fetch(`http://localhost:4444/user/${id}`)
  const todo = await res.json()
  return todo
})



export const applicationSlice = createSlice({
    name: 'application',
    initialState: userState,
    reducers: {},
    extraReducers: (builder) => {
        builder
      .addCase(oneUser.pending, (state) => {
        state.error = null;
        state.loading = true
      })
      .addCase(oneUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false
      })
      .addCase(oneUser.fulfilled, (state, action) => {
        state.error = null;
        state.users = action.payload;
        state.loading = false
      });
  },
})

export default applicationSlice.reducer