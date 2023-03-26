import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

// First, create the thunk
export const register = createAsyncThunk(
  'user/register',
  // muốn dispatch một action thì dùng thunkAPI
  async (payload) => {
    console.log(payload);
    // call api to register
    const data = await userApi.register(payload);

    // save data to local storage
    localStorage.setItem('access_token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));

    return data.user;
  }
);

// Then, handle actions in your reducers:
const userSlice = createSlice({
  name: 'user',
  initialState: {
    currents: {},
    settings: {}, // thông tin phụ
  },

  reducer: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  // extraReducers: {
  //   [register.fulfilled]: (state, action) => {
  //     state.current = action.payload; // action.payload sẽ lấy data từ return result func Register
  //   },

  // },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(register.fulfilled, (state, action) => {
      state.current = action.payload; // action.payload sẽ lấy data từ return result func Register
    });
  },
});

const { reducer } = userSlice;
export default reducer; // export default
