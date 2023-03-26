import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKeys from 'constrants/storage-keys';

// First, create the thunk
export const register = createAsyncThunk(
  'user/register',
  // muốn dispatch một action thì dùng thunkAPI
  async (payload) => {
    // call api to register
    const data = await userApi.register(payload);

    // save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    return data.user;
  }
);

export const login = createAsyncThunk(
  'user/login',
  // muốn dispatch một action thì dùng thunkAPI
  async (payload) => {
    // call api to register
    const data = await userApi.login(payload);

    // save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    return data.user;
  }
);

// Then, handle actions in your reducers:
const userSlice = createSlice({
  name: 'user',
  initialState: {
    // get data from localStorage if data available anything left {}
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {}, // thông tin phụ
  },

  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    logout(state) {
      // clear localStorage
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);

      state.current = {};
    },
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

    builder.addCase(login.fulfilled, (state, action) => {
      state.current = action.payload; // action.payload sẽ lấy data từ return result func Login
    });
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer; // export default
