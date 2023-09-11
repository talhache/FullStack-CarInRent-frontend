import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type User = {
  _id: string;
  nickname: string;
  password: string;
  email: string;
};

type RegistrState = {
  user: User[];
  error: null | unknown | string;
  signingUp: boolean;
  signingIn: boolean;
  token: string | null | number;
  loading: boolean
};

const initialState: RegistrState = {
  user: [],
  error: null,
  signingUp: false,
  signingIn: false,
  loading: false,
  token: localStorage.getItem("token"),
};

export const authSignUp = createAsyncThunk<string | number, User>(
  "auth/signup",
  async ({ nickname, password, email }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4444/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname, password, email }),
      });
      const json = await res.json();

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }

      return json;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSignIn = createAsyncThunk<string | number, User>(
  "auth/signin",
  async ({ nickname, password, email }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4444/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname, password, email }),
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      localStorage.setItem("token", token.token);
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const applicationSlice = createSlice({
    name: 'application',
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