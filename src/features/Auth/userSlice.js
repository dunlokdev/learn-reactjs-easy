import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

const register = createAsyncThunk(
  'user/register',
  // muốn dispatch một action thì dùng thunkAPI
  async (payload) => {
    // call api to register
    const data = userApi.register(payload);

    // save data to local storage
    localStorage.setItem('access_token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));

    return data.user;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currents: {},
    settings: {}, // thông tin phụ
  },

  reducer: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload; // action.payload sẽ lấy data từ return result func Register
    },
  },
});

const { reducer } = userSlice;
export default reducer; // export default
