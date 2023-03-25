const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currents: {},
    settings: {}, // thông tin phụ
  },

  reducers: {},
});

const { reducer } = userSlice;
export default reducer; // export default
