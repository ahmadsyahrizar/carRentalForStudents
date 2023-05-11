import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//global state kita;
const initialState = {
  isLoading: false,
  isLogin: false,
  error: false,
  user: null,
};

// hit button 
// dispatch utk action redux call;
// proces action dari redux di intercept oleh middleware agar dapat melakukan asynchronous calling; 
// reducers 
// return result sesuai dengan case
 

// middleware action => HIT data globally;
export const signIn = createAsyncThunk(
  "/user/login",
  async ({ username, password }, thunkApi) => {
    try {
      const loginAPI = "https://dummyjson.com/auth/login";
      const res = await fetch(loginAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const result = await res.json();

      //if failed to fetch, then reject it with result
      if (!result.id) return thunkApi.rejectWithValue(result);
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
); // action sebagai middleware utk hit API secara asynchronous;

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, _action) => {
            state.isLoading = true;
            state.isLogin = false;
            state.error = false;
            state.user = null;

      }) // loading state
      .addCase(signIn.rejected, (state, action) => {
            state.isLoading = false;
            state.isLogin = false;
            state.error = action.payload;
            state.user = null;
      }) // error state
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogin = true;
        state.error = false;
        state.user = action.payload;
      }); // success state
  },
});

export default authSlice.reducer;
